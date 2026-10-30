'use client';
import Link from 'next/link';
import { Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { storeReferralCode } from '@/lib/auth/referral';

/* Keep ?ref= for the signup that follows, and pass Firebase email links on. */
function LinkHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    storeReferralCode(searchParams.get('ref'));
    if (searchParams.get('mode') === 'verifyEmail' && searchParams.get('oobCode')) {
      router.replace(`/verify-email?${searchParams.toString()}`);
    }
  }, [searchParams, router]);

  return null;
}

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
    <div className="flex flex-col min-h-dvh text-foreground overflow-hidden">
      <Suspense fallback={null}>
        <LinkHandler />
      </Suspense>
      <div className="h-2 bg-background"></div>
      <header className="h-6 flex items-center px-4 lg:px-6">
        <Link href="/" className="flex items-center justify-center gap-2 mx-auto">
          <span className="text-sm font-semibold font-headline text-primary">solo</span>
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-start text-center pt-1">
        <div className="w-full px-4 md:px-6">
          {heroImage && (
            <div className="w-3/4 mx-auto overflow-hidden mb-1">
              <Image
                alt={heroImage.description}
                src={heroImage.imageUrl}
                width={768}
                height={870}
                className="object-contain w-full h-full"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            </div>
           )}

          <div className="space-y-2">
            <h1 className="text-xl font-bold tracking-tight font-headline">
              Networking for Solo Owners
            </h1>
            <p className="text-xs text-muted-foreground">
              Log in or Sign Up to start networking
            </p>
          </div>

          <div className="mt-4 flex flex-col items-center w-full gap-3">
            <div className="flex flex-col gap-3 w-full sm:items-center">
              <div className="h-4" />
              <Button size="lg" asChild className="w-full">
                <Link href="/signup">Sign Up</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full">
                <Link href="/login">Log In</Link>
              </Button>
              <a
                href="https://dash.solobizcards.com/?ref=ROBQZM2"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-700 text-xs font-bold tracking-wide animate-pulse hover:animate-none hover:bg-amber-200 transition-all duration-300 shadow-sm inline-flex items-center gap-1.5"
              >
                ✨ Create Your Free Card First
              </a>
            </div>
            
            {/* 
            <p className="text-xs text-muted-foreground">
              SoloBizCards: <a href="https://solobizcards.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Learn more &gt;&gt;</a>
            </p>

            <a 
              href="https://solobizcards.com/accessories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="-mt-2.5 py-0 w-1/2 animate-float group relative cursor-pointer block"
            >
              <div className="relative w-full aspect-[4/3] mx-auto p-[2px]">
                <Image
                  src="/solo-cards.png"
                  alt="Limited Lifetime Offer"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/60 rounded-xl">
                  <span className="text-4xl font-black text-destructive uppercase tracking-tighter px-2 text-center">
                    Limited Lifetime Offer
                  </span>
                </div>
              </div>
            </a>
            */}
          </div>
        </div>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-2 w-full shrink-0 items-center border-t mt-auto">
        <nav className="flex justify-between w-full px-4 md:px-6">
          <Link href="/terms" className="text-[10px] no-underline hover:no-underline underline-offset-4 text-muted-foreground">
            Terms
          </Link>
          <Link href="/privacy" className="text-[10px] no-underline hover:no-underline underline-offset-4 text-muted-foreground">
            Privacy
          </Link>
          <Link href="/subscription" className="text-[10px] no-underline hover:no-underline underline-offset-4 text-muted-foreground">
            Subscription
          </Link>
          <a href="https://www.solobizcards.com/support" target="_blank" rel="noopener noreferrer" className="text-[10px] no-underline hover:no-underline underline-offset-4 text-muted-foreground">
            Help
          </a>
          <a href="https://www.solobizcards.com/accessories" target="_blank" rel="noopener noreferrer" className="text-[10px] no-underline hover:no-underline underline-offset-4 text-muted-foreground">
            Shop
          </a>
        </nav>
      </footer>
    </div>
  );
}
