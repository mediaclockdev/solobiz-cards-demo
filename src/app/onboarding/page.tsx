'use client';

import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Loader2, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { auth } from '@/services/firebase';
import { completeSignupProfile } from '@/services/signupProfile';
import { readReferralCode } from '@/lib/auth/referral';
import { friendlyAuthError } from '@/lib/auth/session';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const CATEGORIES = [
  "Accounting / Bookkeeping / Tax Services",
  "Agriculture / Farming",
  "Architecture / Landscaping / Lawn Care",
  "Arts / Music / Writing",
  "Automotive Sales / Repair / Detailing",
  "Beauty / Salon / Barber / Spa",
  "Cafe / Coffee Shop",
  "Construction / Contractor",
  "Consulting / Coaching",
  "Creative / Design / Media / Video Production",
  "E-commerce / Online Store / Software",
  "Education / Training / Online Courses",
  "Financial Services / Investing / Insurance",
  "Health & Wellness (gyms, trainers, nutrition)",
  "Home Services (plumbing, HVAC, cleaning, repairs)",
  "Hospitality / Hotel / Travel / Tourism",
  "Legal Services",
  "Marketing / Advertising",
  "Medical / Dental / Healthcare Practice",
  "Other / Miscellaneous Business Type",
  "Personal Services (photography, events, pet care, etc.)",
  "Real Estate",
  "Restaurant / Food Service",
  "Retail",
  "Technology / Software / IT Services",
  "Transportation / Logistics / Delivery"
];

const PREFERENCES = [
  "Local Clients",
  "Non-Local Clients",
  "Both"
];

function OnboardingContent() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    category: '',
    preference: ''
  });
  const searchParams = useSearchParams();
  const [authUser, setAuthUser] = useState<User | null>(() => auth.currentUser);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState('');
  const email = authUser?.email || searchParams.get('email') || '';

  useEffect(() => onAuthStateChanged(auth, (user) => user && setAuthUser(user)), []);

  const handleFinish = async () => {
    if (isSaving) return;
    if (!authUser) {
      setSaveError('Your session has expired. Please sign up again to continue.');
      return;
    }

    setSaveError('');
    setIsSaving(true);
    try {
      await completeSignupProfile({
        user: authUser,
        name: `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim(),
        email,
        businessCategory: formData.category,
        clientsPreference: formData.preference,
        referralCode: readReferralCode(),
        wantsUpdates: searchParams.get('updates') !== '0',
        verifyContinueUrl: `${window.location.origin}/login?verified=true`,
      });
      // No session until the email is verified and the user logs in.
      await signOut(auth);
      setShowPopup(true);
    } catch (error) {
      setSaveError(friendlyAuthError(error, 'Could not save your profile. Please try again.'));
      setIsSaving(false);
    }
  };

  const handleNext = () => {
    if (step === 1) {
      if (formData.firstName && formData.lastName) {
        setStep(2);
      }
    } else if (step === 2) {
      if (formData.category) {
        setStep(3);
      }
    } else {
      if (formData.preference) {
        void handleFinish();
      }
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
        <div className="w-full max-w-md mb-8">
          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-in-out"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        <div className="w-full max-w-md text-center mb-8">
          <h1 className="text-2xl font-bold font-headline">
            {step === 1 
              ? 'Your Name' 
              : step === 2 
              ? 'Your Business Category' 
              : 'Clients/Leads Preference'}
          </h1>
          {step === 2 && (
            <p className="text-muted-foreground mt-2">
              Select the category that best describe your business.
            </p>
          )}
          {step === 3 && (
            <p className="text-muted-foreground mt-2">
              Select Preference
            </p>
          )}
        </div>

        <Card className={cn("w-full max-w-md shadow-xl", (step === 2 || step === 3) && "bg-transparent border-none shadow-none")}>
          <CardContent className="pt-6 px-0 sm:px-6">
            {step === 1 ? (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-base font-bold">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="first name"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    className="h-12 text-lg"
                  />
                </div>
                <div className="space-y-2 border-t pt-4">
                  <Label htmlFor="lastName" className="text-base font-bold">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    className="h-12 text-lg"
                  />
                </div>
              </div>
            ) : step === 2 ? (
              <div className="flex flex-wrap justify-center gap-3">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, category: cat }))}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-[10px] font-medium border transition-all duration-200",
                      formData.category === cat
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-background text-foreground border-input hover:border-muted-foreground hover:bg-accent"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-3">
                {PREFERENCES.map((pref) => (
                  <button
                    key={pref}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, preference: pref }))}
                    className={cn(
                      "px-5 py-2 rounded-full text-xs font-medium border transition-all duration-200",
                      formData.preference === pref
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-background text-foreground border-input hover:border-muted-foreground hover:bg-accent"
                    )}
                  >
                    {pref}
                  </button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="w-full max-w-md mt-auto pb-8">
          {saveError && <p className="text-sm text-destructive text-center mb-3">{saveError}</p>}
          <Button 
            onClick={handleNext} 
            className="w-full h-14 text-lg font-bold flex items-center justify-center gap-2 rounded-lg"
            disabled={
              isSaving ||
              (step === 1 
                ? (!formData.firstName || !formData.lastName) 
                : step === 2 
                ? !formData.category 
                : !formData.preference)
            }
          >
            {isSaving ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                Continue <ArrowRight className="h-5 w-5" />
              </>
            )}
          </Button>
        </div>
      </main>

      <footer className="flex flex-col gap-2 py-3 w-full shrink-0 items-center border-t bg-background">
        <nav className="flex justify-between w-full px-4 md:px-6">
          <Link href="/terms" className="text-xs text-muted-foreground">Terms</Link>
          <Link href="/privacy" className="text-xs text-muted-foreground">Privacy</Link>
          <Link href="/subscription" className="text-xs text-muted-foreground">Subscription</Link>
          <a href="#" className="text-xs text-muted-foreground">Help</a>
          <a href="#" className="text-xs text-muted-foreground">Shop</a>
        </nav>
      </footer>

      <Dialog open={showPopup} onOpenChange={() => {}}>
        <DialogContent aria-describedby={undefined} 
          className="max-w-[400px] p-0 border-none bg-white rounded-xl overflow-hidden shadow-2xl [&>button]:hidden"
          onPointerDownOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <div className="flex flex-col items-center p-6 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 shadow-sm">
              <Mail className="w-8 h-8 text-emerald-600 stroke-[1.5px]" />
            </div>
            <div className="space-y-2">
              <DialogPrimitive.Title asChild><h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Success!</h2></DialogPrimitive.Title>
              <div className="text-slate-500 text-[14px] leading-relaxed">
                Your account was successfully created.<br />
                We&apos;ve sent confirmation instruction to<br />
                <span className="font-bold text-slate-900 block mt-0.5">{email}</span>
              </div>
            </div>
            <div className="w-full bg-[#f0fff9] border border-emerald-100 rounded-lg p-4 text-emerald-700 text-[13px] leading-relaxed font-medium">
              Please check your spam box too for the email. It may take a few minutes to arrive.
            </div>
            <div className="pt-2 w-full flex justify-center">
              <Link 
                href={email ? `/login?email=${encodeURIComponent(email)}` : '/login'}
                className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors font-bold group text-sm"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to sign in
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OnboardingContent />
    </Suspense>
  );
}
