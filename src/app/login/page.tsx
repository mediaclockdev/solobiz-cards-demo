'use client';
import Link from 'next/link';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Edit, Eye, EyeOff, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { login, redirectToDashboard, verifyEmail } from '@/lib/auth/session';

function LoginContent() {
  const searchParams = useSearchParams();
  const initialEmail = searchParams.get('email') || '';
  const [step, setStep] = useState<'email' | 'password'>(initialEmail ? 'password' : 'email');
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(searchParams.get('verified') === 'true');
  const handledOobRef = useRef(false);

  // Verification links can land here directly when Firebase forwards them.
  useEffect(() => {
    const oobCode = searchParams.get('oobCode');
    if (searchParams.get('mode') !== 'verifyEmail' || !oobCode || handledOobRef.current) return;
    handledOobRef.current = true;
    verifyEmail(oobCode).then((res) => {
      if (res.success) {
        setIsVerified(true);
        if (res.email) {
          setEmail(res.email);
          setStep('password');
        }
      }
    });
  }, [searchParams]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleContinue = () => {
    if (validateEmail(email)) {
      setStep('password');
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };
  
  const handleEmailEdit = () => {
    setStep('email');
    setPassword('');
    setFormError('');
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (step === 'email') {
      handleContinue();
      return;
    }

    setFormError('');
    setIsSubmitting(true);
    const result = await login(email.trim(), password);
    if (result.success) {
      await redirectToDashboard();
      return;
    }
    setFormError(result.error);
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="h-12 flex items-center justify-center px-4 lg:px-6 bg-accent border-b">
        <Link href="/" className="flex items-center justify-center gap-2">
          <span className="text-sm font-semibold font-headline text-primary">solo</span>
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center pt-8 px-4 bg-accent">
        <div className="w-full max-w-md relative mb-8">
          <Link href="/" className="absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Button variant="ghost" size="icon" className="rounded-full bg-background hover:bg-background/80">
              <ArrowLeft className="h-8 w-8" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold font-headline text-center">Log In</h1>
        </div>

        <div className="w-full max-w-md text-center mb-8">
          <p className="text-muted-foreground">
            Login to your account to start networking.
          </p>
        </div>

        {isVerified && (
          <div className="w-full max-w-md mb-4 rounded-lg border border-emerald-200 bg-[#f0fff9] p-3 text-sm text-emerald-800 flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
            Email verified! Please log in to your account.
          </div>
        )}

        <form onSubmit={handleLogin} className="w-full max-w-md flex flex-col h-full">
          <Card className="w-full">
            <CardContent className="pt-6 transition-all duration-300">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={step === 'password'}
                      className={cn(step === 'password' && 'pr-10')}
                    />
                    {step === 'password' && (
                       <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8" onClick={handleEmailEdit}>
                          <Edit className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    )}
                  </div>
                   {emailError && <p className="text-sm text-destructive">{emailError}</p>}
                </div>

                <div
                  className={cn(
                    'transition-all duration-500 ease-in-out overflow-hidden -m-1 p-1',
                    step === 'email' ? 'max-h-0 opacity-0' : 'max-h-40 opacity-100'
                  )}
                >
                  {step === 'password' && (
                    <div className="space-y-2 mt-4">
                      <Label htmlFor="password">Password</Label>
                       <div className="relative">
                        <Input
                          id="password"
                          type={isPasswordVisible ? 'text' : 'password'}
                          placeholder="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pr-10"
                        />
                         <Button
                           type="button"
                           variant="ghost"
                           size="icon"
                           className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground z-10"
                           onClick={togglePasswordVisibility}
                           aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
                         >
                           {isPasswordVisible ? (
                             <EyeOff className="h-4 w-4" />
                           ) : (
                             <Eye className="h-4 w-4" />
                           )}
                         </Button>
                      </div>
                       <div className="flex justify-end">
                          <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                              Forgot Password? &rarr;
                          </Link>
                      </div>
                    </div>
                  )}
                </div>

                {step === 'email' && (
                  <Button type="button" onClick={handleContinue} className="w-full">
                    Continue
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
          
          <div className={cn("w-full mt-auto pb-8 pt-8 transition-all duration-500 ease-in-out flex flex-col items-center gap-4",
              step === 'email' ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'
          )}>
               {step === 'password' && (
                 <>
                   {formError && <p className="text-sm text-destructive text-center">{formError}</p>}
                   <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                     {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Log In'}
                   </Button>
                   <p className="text-xs text-muted-foreground">
                    SoloBizCards: <a href="https://solobizcards.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Learn more &gt;&gt;</a>
                  </p>
                 </>
                )}
          </div>
        </form>
      </main>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}
