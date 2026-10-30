import type { Auth } from "firebase-admin/auth";

/**
 * Initialised on first use, not at import. `next build` imports every route
 * while collecting page data, so initialising here made the build depend on
 * firebase-admin loading and on the service-account variables being present
 * and well formed on the build machine. Now only a real request does that,
 * and a misconfigured server fails that request with a clear message instead
 * of failing the deploy.
 */
let authPromise: Promise<Auth> | null = null;

export function getAdminAuth(): Promise<Auth> {
  if (!authPromise) {
    authPromise = initAdminAuth().catch((error) => {
      // Let the next request retry instead of caching the failure forever.
      authPromise = null;
      throw error;
    });
  }
  return authPromise;
}

async function initAdminAuth(): Promise<Auth> {
  const { cert, getApp, getApps, initializeApp } = await import("firebase-admin/app");
  const { getAuth } = await import("firebase-admin/auth");

  if (!getApps().length) {
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    const clientEmail =
      process.env.FIREBASE_CLIENT_EMAIL ||
      process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL;
    const privateKey = (
      process.env.FIREBASE_PRIVATE_KEY ||
      process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY
    )
      ?.replace(/^"|"$/g, "")
      .replace(/\\n/g, "\n");

    const missing = [
      !projectId && "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
      !clientEmail && "FIREBASE_CLIENT_EMAIL",
      !privateKey && "FIREBASE_PRIVATE_KEY",
    ].filter(Boolean);
    if (missing.length) {
      throw new Error(`Firebase Admin is not configured. Missing: ${missing.join(", ")}`);
    }

    initializeApp({
      credential: cert({ projectId, clientEmail, privateKey }),
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    });
  }

  return getAuth(getApp());
}
