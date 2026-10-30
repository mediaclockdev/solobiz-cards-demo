import { NextResponse } from 'next/server';
import type { Auth } from 'firebase-admin/auth';
import { getAdminAuth } from '@/services/firebaseAdmin';

export const dynamic = 'force-dynamic';

/**
 * Exchanges the caller's Firebase ID token for a custom token that
 * dash.solobizcards.com/auth/sso signs in with. The ID token proves the caller
 * is that user, so nobody can mint a token for someone else's uid.
 */
export async function POST(req: Request) {
  const { idToken } = await req.json().catch(() => ({}));
  if (!idToken) {
    return NextResponse.json({ error: 'idToken is required' }, { status: 400 });
  }

  let adminAuth: Auth;
  try {
    adminAuth = await getAdminAuth();
  } catch (error) {
    // A server problem, not the caller's: keep it out of the 401 below.
    console.error('Firebase Admin initialisation failed:', error);
    return NextResponse.json({ error: 'Server is not configured' }, { status: 500 });
  }

  try {
    const { uid } = await adminAuth.verifyIdToken(idToken);
    const token = await adminAuth.createCustomToken(uid);
    return NextResponse.json({ token });
  } catch (error) {
    console.error('Error creating SSO token:', error);
    return NextResponse.json({ error: 'Not authorized' }, { status: 401 });
  }
}
