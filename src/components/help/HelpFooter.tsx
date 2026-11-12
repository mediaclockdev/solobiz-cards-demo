import React from 'react';
import Link from 'next/link';

export function HelpFooter() {
  return (
    <footer className="w-full bg-background border-t mt-auto py-5 px-4 text-xs">
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Collections quick pills */}
        <div className="flex flex-wrap justify-center gap-1.5 w-full">
          <Link 
            href="/help/tips-tricks" 
            className="px-2.5 py-1 rounded-full bg-muted/60 text-muted-foreground hover:text-foreground text-[11px] transition-colors"
          >
            Tips & Tricks
          </Link>
          <Link 
            href="/help/troubleshooting" 
            className="px-2.5 py-1 rounded-full bg-muted/60 text-muted-foreground hover:text-foreground text-[11px] transition-colors"
          >
            Troubleshooting
          </Link>
          <Link 
            href="/help/my-order" 
            className="px-2.5 py-1 rounded-full bg-muted/60 text-muted-foreground hover:text-foreground text-[11px] transition-colors"
          >
            Orders
          </Link>
          <Link 
            href="/help/general" 
            className="px-2.5 py-1 rounded-full bg-muted/60 text-muted-foreground hover:text-foreground text-[11px] transition-colors"
          >
            General FAQ
          </Link>
        </div>

        {/* Standard App Navigation */}
        <nav className="flex justify-between w-full px-2 text-[11px] text-muted-foreground pt-1 border-t border-border/50">
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link href="/subscription" className="hover:text-primary transition-colors">
            Subscription
          </Link>
          <Link href="/help" className="text-primary font-semibold hover:underline">
            Help
          </Link>
          <a 
            href="https://www.solobizcards.com/accessories" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors"
          >
            Shop
          </a>
        </nav>

        <p className="text-[10px] text-muted-foreground/70">
          © {new Date().getFullYear()} SoloBizCards. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
