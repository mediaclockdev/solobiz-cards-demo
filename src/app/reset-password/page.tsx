'use client';
import Link from 'next/link';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Check, Eye, EyeOff, Loader2, X, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { checkResetCode, confirmNewPassword } from '@/lib/auth/session';

/* The dashboard's rules (solobizcard ResetPasswordModal), so a password set
   here is one the dashboard would also accept. */
const PASSWORD_RULES = [
  { label: 'Minimum 8 characters', test: (p: string) => p.length >= 8 },
  { label: 'Maximum 15 characters', test: (p: string) => p.length <= 15 },
  { label: 'At least 1 lowercase letter', test: (p: string) => /[a-z]/.test(p) },
  { label: 'At least 1 uppercase letter', test: (p: string) => /[A-Z]/.test(p) },
  { label: 'At least 1 number', test: (p: string) => /[0-9]/.test(p) },
];

function PasswordField({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          type={isVisible ? 'text' : 'password'}
          placeholder="password"
          autoComplete="new-password"
          required
          maxLength={15}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pr-10"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground z-10"
          onClick={() => setIsVisible((v) => !v)}
          aria-label={isVisible ? 'Hide password' : 'Show password'}
        >
          {isVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const oobCode = searchParams.get('oobCode') || '';
  const [status, setStatus] = useState<'checking' | 'ready' | 'invalid'>('checking');
  const [accountEmail, setAccountEmail] = useState('');
  const [linkError, setLinkError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const hasCheckedRef = useRef(false);

  useEffect(() => {
    if (hasCheckedRef.current) return;
    hasCheckedRef.current = true;

    if (!oobCode) {
      setLinkError('This reset link is incomplete. Please request a new one.');
      setStatus('invalid');
      return;
    }
    checkResetCode(oobCode).then((res) => {
      if (res.success) {
        setAccountEmail(res.email);
        setStatus('ready');
      } else {
        setLinkError(res.error);
        setStatus('invalid');
      }
    });
  }, [oobCode]);

  const passedRules = PASSWORD_RULES.filter((rule) => rule.test(password)).length;
  const strengthColor =
    passedRules <= 2
      ? 'bg-red-500'
      : passedRules === 3
        ? 'bg-yellow-500'
        : passedRules === 4
          ? 'bg-blue-500'
          : 'bg-emerald-600';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setError('');

    if (passedRules < PASSWORD_RULES.length) {
      setError('Your password does not meet all the requirements below.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);
    const res = await confirmNewPassword(oobCode, password);
    if (res.success) {
      router.replace(`/login?reset=true&email=${encodeURIComponent(accountEmail)}`);
      return;
    }
    setError(res.error);
    setIsSubmitting(false);
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
            <Button type="button" variant="ghost" size="icon" className="rounded-full bg-background hover:bg-background/80">
              <ArrowLeft className="h-8 w-8" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold font-headline text-center">Reset Password</h1>
        </div>

        {status === 'checking' && (
          <div className="flex flex-col items-center gap-3 pt-8 text-muted-foreground">
            <Loader2 className="h-8 w-8 animate-spin" />
            <p>Checking your reset link…</p>
          </div>
        )}

        {status === 'invalid' && (
          <>
            <Card className="w-full max-w-md">
              <CardContent className="pt-8 pb-8 flex flex-col items-center text-center space-y-4">
                <XCircle className="h-10 w-10 text-destructive" />
                <h2 className="text-xl font-bold font-headline">Link not valid</h2>
                <p className="text-muted-foreground">{linkError}</p>
              </CardContent>
            </Card>
            <div className="w-full max-w-md mt-auto pb-8">
              <Button asChild className="w-full h-12 text-lg">
                <Link href="/forgot-password">Request a New Link</Link>
              </Button>
            </div>
          </>
        )}

        {status === 'ready' && (
          <>
            <div className="w-full max-w-md text-center mb-8">
              <p className="text-muted-foreground">
                Choose a new password for <span className="font-semibold text-foreground">{accountEmail}</span>.
              </p>
            </div>

            <Card className="w-full max-w-md">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <PasswordField id="password" label="New Password" value={password} onChange={setPassword} />
                  <PasswordField
                    id="confirm-password"
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                  />

                  {password.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className={cn('h-full rounded-full transition-all duration-300', strengthColor)}
                          style={{ width: `${(passedRules / PASSWORD_RULES.length) * 100}%` }}
                        />
                      </div>
                      <ul className="space-y-1 text-sm">
                        {PASSWORD_RULES.map((rule) => {
                          const passed = rule.test(password);
                          return (
                            <li
                              key={rule.label}
                              className={cn('flex items-center gap-1.5', passed ? 'text-emerald-700' : 'text-destructive')}
                            >
                              {passed ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                              {rule.label}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {error && <p className="w-full max-w-md mt-4 text-sm text-destructive text-center">{error}</p>}

            <div className="w-full max-w-md mt-auto pt-8 pb-8">
              <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Reset Password'}
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={null}>
      <ResetPasswordContent />
    </Suspense>
  );
}
