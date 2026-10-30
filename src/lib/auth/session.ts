'use client';

import {
  applyActionCode,
  checkActionCode,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from 'firebase/firestore';
import { auth, db } from '@/services/firebase';

/**
 * Auth for solobiz.cards. Accounts live in the same Firebase project as
 * dash.solobizcards.com; after login the user is handed to the dashboard
 * through its /auth/sso page with a short-lived custom token.
 */

export const DASHBOARD_URL = (
  process.env.NEXT_PUBLIC_MAIN_APP_URL || 'https://dash.solobizcards.com'
).replace(/\/$/, '');

export const DEFAULT_DASHBOARD_PATH = '/dashboard/settings?tab=nfc_cards';

export function friendlyAuthError(error: unknown, fallback: string): string {
  const code = (error as { code?: string })?.code || '';
  if (
    [
      'auth/invalid-credential',
      'auth/wrong-password',
      'auth/user-not-found',
      'auth/invalid-login-credentials',
    ].includes(code)
  ) {
    return 'Invalid email or password. Please try again.';
  }
  if (code === 'auth/email-already-in-use') {
    return 'That email already has an account. Try logging in instead.';
  }
  if (code === 'auth/too-many-requests') {
    return 'Too many attempts. Please wait a few minutes and try again.';
  }
  const message = String((error as { message?: string })?.message || '')
    .replace(/^Firebase:\s*/i, '')
    .trim();
  return message || fallback;
}

export async function sendVerification(user: User): Promise<void> {
  try {
    await sendEmailVerification(user, {
      url: `${window.location.origin}/login?verified=true`,
      handleCodeInApp: false,
    });
  } catch (error) {
    // The domain may not be on Firebase's authorized list yet; Firebase's
    // default landing page still verifies the address.
    if ((error as { code?: string })?.code === 'auth/unauthorized-continue-uri') {
      await sendEmailVerification(user);
    } else {
      throw error;
    }
  }
}

type LoginResult = { success: true } | { success: false; error: string };

export async function login(email: string, password: string): Promise<LoginResult> {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    if (!user.emailVerified) {
      await sendVerification(user).catch(() => {});
      await signOut(auth);
      return {
        success: false,
        error:
          'Please verify your email before logging in. We have sent a new verification link to your email.',
      };
    }

    const userRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      const data = userDoc.data();
      // Firebase says the address is verified but the profile still carries the
      // signup state (the link was opened on Firebase's own page, not ours).
      if (data.status === 'inactive' && !data.isVerify) {
        await updateDoc(userRef, { isVerify: true, status: 'active' });
      } else if (data.status !== 'active') {
        await signOut(auth);
        return {
          success: false,
          error: 'Your account is not active. Please contact support.',
        };
      }
      await updateDoc(userRef, { isLoggedIn: true, lastLogin: serverTimestamp() });
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: friendlyAuthError(error, 'Could not sign you in. Please try again.'),
    };
  }
}

/** Apply an email-verification link and activate the matching profile. */
export async function verifyEmail(
  oobCode: string,
): Promise<{ success: true; email: string } | { success: false; error: string }> {
  try {
    let email = '';
    try {
      email = (await checkActionCode(auth, oobCode)).data.email || '';
    } catch (error) {
      // Inspection is optional; applyActionCode below is the real check.
      console.warn('[verify] checkActionCode failed:', error);
    }
    console.log('[verify] 1. email from link:', email || '(none)');

    await applyActionCode(auth, oobCode);
    console.log('[verify] 2. email marked verified in Firebase Auth');

    if (email) {
      try {
        console.log('[verify] 3. looking up users/ by email (signed in:', !!auth.currentUser, ')');
        const snapshot = await getDocs(
          query(collection(db, 'users'), where('email', '==', email.toLowerCase().trim())),
        );
        const userDoc = snapshot.docs[0];
        console.log('[verify] 4. profiles found:', snapshot.size);
        if (userDoc) {
          await updateDoc(userDoc.ref, { isVerify: true, status: 'active' });
          console.log('[verify] 5. profile set to active');
          const data = userDoc.data();
          if (data.businessCategory && data.clientsPreference) {
            console.log('[verify] 6. calling /api/subscribe');
            const res = await fetch('/api/subscribe', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                // The signup profile stores the name as displayName.
                name: data.displayName || data.name || '',
                email,
                businessCategory: data.businessCategory,
                clientsPreference: data.clientsPreference,
              }),
            }).catch((error) => {
              console.warn('[verify] /api/subscribe request failed:', error);
              return null;
            });
            if (res) {
              console.log('[verify] 7. /api/subscribe responded', res.status, await res.text());
            }
          } else {
            console.warn('[verify] 6. skipped GetResponse: profile has no businessCategory/clientsPreference');
          }
        }
      } catch (error) {
        // Login activates the profile too, so this is not fatal.
        console.warn('[verify] Post-verification profile sync failed:', error);
      }
    }

    return { success: true, email };
  } catch (error) {
    return {
      success: false,
      error: friendlyAuthError(error, 'Verification link is invalid or expired.'),
    };
  }
}

export async function resetPassword(email: string): Promise<void> {
  await sendPasswordResetEmail(auth, email, {
    url: `${window.location.origin}/login`,
  }).catch(async (error) => {
    if ((error as { code?: string })?.code === 'auth/unauthorized-continue-uri') {
      await sendPasswordResetEmail(auth, email);
    } else {
      throw error;
    }
  });
}

/** Sign the current user into dash.solobizcards.com and go there. */
export async function redirectToDashboard(path = DEFAULT_DASHBOARD_PATH): Promise<void> {
  const user = auth.currentUser;
  const fallback = `${DASHBOARD_URL}${path}`;
  if (!user) {
    window.location.href = fallback;
    return;
  }

  try {
    const res = await fetch('/api/auth/generate-sso-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken: await user.getIdToken() }),
    });
    const data = await res.json();
    if (!res.ok || !data.token) {
      throw new Error(data.error || 'Failed to generate session token');
    }

    const target = new URL('/auth/sso', DASHBOARD_URL);
    target.searchParams.set('token', data.token);
    target.searchParams.set('redirect', path);
    // The session lives on the dashboard from here on.
    await signOut(auth);
    window.location.href = target.toString();
  } catch (error) {
    console.error('SSO redirect failed:', error);
    window.location.href = fallback;
  }
}
