'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
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

const SoloBizVideoAd = ({ onContinue }: { onContinue: () => void }) => {
  const [phase, setPhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const cardImages = {
    card1: "data:image/webp;base64,UklGRjgwAABXRUJQVlA4WAoAAAAgAAAA/AAAGQIASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggSi4AAJDOAJ0BKv0AGgI+USSPRaOiISEm8YrIcAoJZW7haTJeqbt9lIRJ+489bk3vl+Q5WPHXsnyhugPJ162PMd/Xnp7eaj9tvVX/6vr1/rPqN/2P/Addp6OXl3+0X+7Ppb6pb1o7fP9V+UHnf5NvePtn/hfcV/wPG11v/1fQn+Yfhb9j/g/qy+5X9t4W/LL/O9RT8p/p3+j/uH7oej3vAbY+gj7nfaP+H/jfIA/xfTb7S/6r3BP5j/XP91/fPbT/iePv+H/6n7HfAL/UP7z/w/8r+TP0z/4//h/1X5We9T6t/9H+x+Av+d/2z/rf4TtselMYSA7QkAtsGe5DSsXf9LYDS+AXrhEe4a35mveqq+TBsG6PvdOfdNSVTPtvNRejRQYF88ysaO3yL/PzxQWcR3FKCGcu0BstYDpeqve1BzpSXeKBY2WdCk5CBgjT57+/PGLuN7aFQr8qc+lvHSvAdBfJlV1Ot2xqiTRtvkBR8V6hfMSsgm5rv+jgjMILU3Jlu/cTbVM6pSDxhKddd6Jevd/awoP15W05R0eg0kPUfNAI37d+Su4m/n6e9LpVAfYwMUdYqQt9c0C7gp8kq7twJjjOUCppT7Ud2sxhxGypYaU5Lepl5OYi8fZQWNNVOC2Xf0/HFd7OiYI4AD8XcY/rsEyman8UMZdVpzIrMcGpigZ1OqKZ/GU8HvNr8lw6LE1LjsvHA39FHeCzb12VBSh3xk7yt47v+8+lkqh6Iu/E0dC/1JvRj1OcTWodm2LwPgMkfeC4xgx9Uh5o9xyIx6cxD4ssCP7??"
  };

  const totalDuration = 7500;
  const phases = [
    { start: 0, end: 800, name: 'ditch' },
    { start: 800, end: 1600, name: 'digital' },
    { start: 1600, end: 3500, name: 'cards' },
    { start: 3500, end: 5500, name: 'free' },
    { start: 5500, end: 7500, name: 'cta' }
  ];

  const startAnimation = () => {
    setIsPlaying(true);
    setPhase(0);
    const startTime = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentPhase = phases.findIndex(p => elapsed >= p.start && elapsed < p.end);
      if (currentPhase !== -1) setPhase(currentPhase);
      if (elapsed >= totalDuration) {
        clearInterval(progressRef.current!);
        setPhase(4);
      }
    }, 16);
    timerRef.current = setTimeout(() => {
      setIsPlaying(false);
    }, totalDuration);
  };

  useEffect(() => {
    startAnimation();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#0f0f1a] flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes slideInWord {
          0% { opacity: 0; transform: translateX(-80px) scale(0.9); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
      
      {phase === 0 && (
        <div className="text-center">
          <h1 className="text-6xl font-black text-white animate-[slideInWord_0.4s_ease-out_forwards]">Ditch Paper.</h1>
        </div>
      )}
      
      {phase === 1 && (
        <div className="text-center">
          <h1 className="text-6xl font-black text-[#00d4ff] animate-[slideInWord_0.4s_ease-out_forwards]">Go Digital.</h1>
        </div>
      )}

      {phase === 2 && (
        <div className="text-center text-white">
          <p className="text-xl font-bold mb-4">Your card. Instantly.</p>
          <div className="w-64 h-96 bg-gray-800 rounded-lg shadow-2xl animate-pulse" />
        </div>
      )}

      {phase === 3 && (
        <div className="text-center">
          <h1 className="text-5xl font-black text-emerald-400 mb-4 animate-pulse">Get a FREE card TODAY!</h1>
          <p className="text-gray-400">No credit card needed</p>
        </div>
      )}

      {phase === 4 && (
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-extrabold text-white">Ready to go digital?</h1>
          <Button 
            onClick={onContinue}
            className="h-16 px-12 text-2xl font-bold rounded-lg bg-emerald-500 hover:bg-emerald-600 transition-all hover:scale-105"
          >
            Yes →
          </Button>
        </div>
      )}
    </div>
  );
};

export default function WelcomePage() {
  const [showAnimation, setShowPopup] = useState(true);
  const [step, setStep] = useState<'email' | 'password'>('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (password.length < 6) {
      setFormError('Password must be at least 6 characters.');
      return;
    }
    setFormError('');
    setIsSubmitting(true);
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      router.replace(`/onboarding?email=${encodeURIComponent(email.trim())}`);
    } catch (error) {
      setFormError(friendlyAuthError(error, 'Could not create your account. Please try again.'));
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      {showAnimation && <SoloBizVideoAd onContinue={() => setShowPopup(false)} />}
      
      <header className="h-12 flex items-center justify-center px-4 lg:px-6 bg-accent border-b">
        <Link href="/" className="flex items-center justify-center gap-2">
          <span className="text-sm font-semibold font-headline text-primary">solo</span>
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center pt-8 px-4 bg-accent">
        <div className="w-full max-w-md text-center mb-8">
          <h1 className="text-3xl font-bold font-headline mb-2">Welcome!</h1>
          <p className="text-muted-foreground">Create your account to get started.</p>
        </div>

        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={step === 'password'}
                />
              </div>

              {step === 'password' ? (
                <>
                  <div className="space-y-2">
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
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
                      >
                        {isPasswordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  {formError && <p className="text-sm text-destructive">{formError}</p>}
                  <Button type="submit" className="w-full h-12 text-lg rounded-md" disabled={isSubmitting}>
                    {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Sign Up'}
                  </Button>
                </>
              ) : (
                <Button type="button" onClick={() => email && setStep('password')} className="w-full rounded-md">Continue</Button>
              )}
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
