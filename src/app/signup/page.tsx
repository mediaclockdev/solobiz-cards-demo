'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Edit, Eye, EyeOff, Loader2 } from 'lucide-react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { auth } from '@/services/firebase';
import { friendlyAuthError } from '@/lib/auth/session';

export default function SignupPage() {
  const [step, setStep] = useState<'email' | 'password'>('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [formError, setFormError] = useState('');
  const [wantsUpdates, setWantsUpdates] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

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
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (step === 'email') {
      handleContinue();
      return;
    }
    if (password.length < 6) {
      setFormError('Password must be at least 6 characters.');
      return;
    }

    setFormError('');
    setIsSubmitting(true);
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      router.replace(
        `/onboarding?email=${encodeURIComponent(email.trim())}&updates=${wantsUpdates ? '1' : '0'}`
      );
    } catch (error) {
      setFormError(friendlyAuthError(error, 'Could not create your account. Please try again.'));
      setIsSubmitting(false);
    }
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
          <h1 className="text-3xl font-bold font-headline text-center">Sign Up</h1>
        </div>

        <div className="w-full max-w-md text-center mb-8">
          <p className="text-muted-foreground text-lg">
            Create your account to start networking.
          </p>
        </div>

        <Card className="w-full max-w-md">
          <CardContent className="pt-6 transition-all duration-300">
            <form onSubmit={handleSignUp} className="space-y-4">
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
                  step === 'email' ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'
                )}
              >
                {step === 'password' && (
                  <>
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
                    </div>
                    <div className="flex items-center space-x-2 mt-4">
                      <Checkbox
                        id="updates"
                        checked={wantsUpdates}
                        onCheckedChange={(checked) => setWantsUpdates(checked === true)}
                      />
                      <label
                        htmlFor="updates"
                        className="text-sm font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Yes, send me the latest updates and news
                      </label>
                    </div>
                    {formError && <p className="text-sm text-destructive mt-4">{formError}</p>}
                    <Button type="submit" className="w-full h-12 text-lg mt-4" disabled={isSubmitting}>
                      {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Sign Up'}
                    </Button>
                  </>
                )}
              </div>

              {step === 'email' && (
                <Button type="button" onClick={handleContinue} className="w-full">
                  Continue
                </Button>
              )}
            </form>
          </CardContent>
        </Card>

        <div className={cn("w-full max-w-md mt-auto pb-8 text-center text-sm text-muted-foreground transition-all duration-500 ease-in-out",
          step === 'email' ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'
        )}>
          {step === 'password' && (
            <p>
              By clicking &quot;Sign Up&quot; you agree with our{' '}
              <Link href="/terms" className="underline hover:text-primary font-bold">
                Terms
              </Link>{' '}
              &{' '}
              <Link href="/privacy" className="underline hover:text-primary font-bold">
                Privacy
              </Link>
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
