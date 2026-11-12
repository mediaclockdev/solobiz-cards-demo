"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Menu, X, ExternalLink, HelpCircle, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HelpHeaderProps {
  showBackToHelp?: boolean;
  backHref?: string;
  title?: string;
}

export function HelpHeader({ 
  showBackToHelp = false, 
  backHref = '/help',
  title
}: HelpHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-md border-b border-border/80">
      <div className="flex h-14 items-center justify-between px-4 w-full">
        {/* Left: Back button or Logo */}
        <div className="flex items-center gap-2">
          {showBackToHelp ? (
            <Link
              href={backHref}
              className="flex items-center justify-center h-9 w-9 rounded-full bg-muted/60 hover:bg-muted text-foreground transition-colors"
              aria-label="Back"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
          ) : (
            <Link href="/" className="flex items-center gap-1.5 select-none group">
              <span className="text-base font-bold font-headline tracking-tight text-primary">
                solo
              </span>
            </Link>
          )}

          <div className="flex items-center gap-1.5">
            <span className="text-border">|</span>
            <Link
              href="/help"
              className="flex items-center gap-1 text-xs font-bold text-foreground/90 hover:text-primary transition-colors"
            >
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold text-[11px]">
                Help Center
              </span>
            </Link>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5">
          <a
            href="https://www.solobizcards.com/accessories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <ShoppingBag className="h-3.5 w-3.5 text-primary" />
            <span>Shop</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-card px-4 py-3 space-y-2 shadow-lg animate-in slide-in-from-top-1 duration-150">
          <div className="flex flex-col space-y-1">
            <Link
              href="/help"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-xs font-semibold text-foreground hover:text-primary transition-colors"
            >
              <span>Help Center Home</span>
              <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
            </Link>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-xs font-medium text-foreground/80 hover:text-primary transition-colors border-t border-border/40"
            >
              <span>SoloBizCards Home</span>
            </Link>
            <a
              href="https://www.solobizcards.com/accessories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 text-xs font-medium text-foreground/80 hover:text-primary transition-colors border-t border-border/40"
            >
              <span>Hardware & Accessories</span>
              <ExternalLink className="h-3 w-3 text-muted-foreground" />
            </a>
            <a
              href="mailto:support@solobiz.cards"
              className="flex items-center justify-between py-2 text-xs font-medium text-foreground/80 hover:text-primary transition-colors border-t border-border/40"
            >
              <span>Email Support</span>
              <span className="text-[10px] text-primary">support@solobiz.cards</span>
            </a>
          </div>

          <div className="pt-2 flex items-center gap-2 border-t border-border/60">
            <Button variant="outline" size="sm" asChild className="flex-1 text-xs h-8">
              <Link href="/login">Login</Link>
            </Button>
            <Button size="sm" asChild className="flex-1 text-xs h-8 bg-primary hover:bg-primary/90">
              <a href="https://dash.solobizcards.com/?ref=ROBQZM2" target="_blank" rel="noopener noreferrer">
                Create Free Card
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
