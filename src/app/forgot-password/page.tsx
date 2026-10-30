
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { friendlyAuthError, resetPassword } from '@/lib/auth/session';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  console.log('isSending:', isSending);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;
    setError('');
    setMessage('');
    setIsSending(true);
    try {
      await resetPassword(email.trim());
      setMessage('If an account exists for that email, a reset link is on its way. Check your spam folder too.');
    } catch (err) {
      setError(friendlyAuthError(err, 'Could not send the reset email. Please try again.'));
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="h-12 flex items-center justify-center px-4 lg:px-6 bg-accent border-b">
        <Link href="/" className="flex items-center justify-center gap-2">
          <span className="text-sm font-semibold font-headline text-primary">solo</span>
        </Link>
      </header>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col items-center pt-8 px-4 bg-accent">
        <div className="w-full max-w-md relative mb-8">
          <Link href="/login" className="absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Button variant="ghost" size="icon" className="rounded-full bg-background hover:bg-background/80">
              <ArrowLeft className="h-8 w-8" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold font-headline text-center">Forgot Password</h1>
        </div>

        <div className="w-full max-w-md text-center mb-8">
          <p className="text-muted-foreground">
            Enter the email associated with your account, and we&apos;ll send you a link to reset your password.
          </p>
        </div>

        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
        
        {message && <p className="w-full max-w-md mt-4 text-sm text-emerald-700 text-center">{message}</p>}
        {error && <p className="w-full max-w-md mt-4 text-sm text-destructive text-center">{error}</p>}

        <div className={cn("w-full max-w-md mt-auto pb-8")}>
             <Button type="submit" className="w-full h-12 text-lg" disabled={isSending}>
                {isSending ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Reset Password'}
            </Button>
        </div>
      </form>
    </div>
  );
}
