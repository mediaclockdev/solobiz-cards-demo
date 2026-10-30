'use client';

import Link from 'next/link';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckCircle2, Loader2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { verifyEmail } from '@/lib/auth/session';

function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (hasRunRef.current) return;
    hasRunRef.current = true;

    const oobCode = searchParams.get('oobCode');
    if (searchParams.get('mode') !== 'verifyEmail' || !oobCode) {
      setStatus('error');
      setErrorMessage('No verification code found in this link.');
      return;
    }

    verifyEmail(oobCode).then((res) => {
      if (res.success) {
        setStatus('success');
        const emailParam = res.email ? `&email=${encodeURIComponent(res.email)}` : '';
        setTimeout(() => router.replace(`/login?verified=true${emailParam}`), 1500);
      } else {
        setStatus('error');
        setErrorMessage(
          /invalid-action-code|expired/i.test(res.error)
            ? 'This verification link has expired or has already been used. If you have already verified, please log in.'
            : res.error
        );
      }
    });
  }, [searchParams, router]);

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="h-12 flex items-center justify-center px-4 lg:px-6 bg-accent border-b">
        <Link href="/" className="flex items-center justify-center gap-2">
          <span className="text-sm font-semibold font-headline text-primary">solo</span>
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center pt-16 px-4 bg-accent">
        <Card className="w-full max-w-md">
          <CardContent className="pt-8 pb-8 flex flex-col items-center text-center space-y-4">
            {status === 'loading' && (
              <>
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                <h1 className="text-2xl font-bold font-headline">Verifying your email…</h1>
              </>
            )}
            {status === 'success' && (
              <>
                <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                <h1 className="text-2xl font-bold font-headline">Email verified!</h1>
                <p className="text-muted-foreground">Taking you to log in…</p>
              </>
            )}
            {status === 'error' && (
              <>
                <XCircle className="h-10 w-10 text-destructive" />
                <h1 className="text-2xl font-bold font-headline">Verification failed</h1>
                <p className="text-muted-foreground">{errorMessage}</p>
                <Button className="w-full h-12 text-lg" onClick={() => router.replace('/login')}>
                  Go to Log In
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailContent />
    </Suspense>
  );
}
