"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search, 
  BookOpen, 
  AlertCircle, 
  Package, 
  HelpCircle, 
  CreditCard, 
  Sparkles, 
  MessageSquare, 
  Mail, 
  Clock, 
  ChevronRight, 
  ArrowRight,
  ExternalLink,
  X,
  PhoneCall
} from 'lucide-react';
import { HelpHeader } from '@/components/help/HelpHeader';
import { HelpFooter } from '@/components/help/HelpFooter';
import { 
  HELP_COLLECTIONS, 
  POPULAR_ARTICLES, 
  HOME_FAQS, 
  searchArticles,
  HelpArticle
} from '@/lib/help-data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { FormattedContent, formatInlineText } from '@/components/help/FormattedContent';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const ICON_MAP: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-5 h-5 text-primary" />,
  AlertCircle: <AlertCircle className="w-5 h-5 text-primary" />,
  Package: <Package className="w-5 h-5 text-primary" />,
  HelpCircle: <HelpCircle className="w-5 h-5 text-primary" />,
  CreditCard: <CreditCard className="w-5 h-5 text-primary" />,
  Sparkles: <Sparkles className="w-5 h-5 text-primary" />,
};

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  const searchResults = useMemo(() => {
    return searchArticles(searchQuery);
  }, [searchQuery]);

  return (
    <div className="flex flex-col min-h-dvh w-full bg-background text-foreground">
      {/* Mobile-Ready Flex Header */}
      <HelpHeader />

      <main className="flex-1 flex flex-col w-full">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground px-4 py-7 flex flex-col items-center text-center relative overflow-hidden">
          <div className="flex flex-col items-center w-full max-w-sm">
            <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-semibold tracking-wide uppercase mb-2">
              SoloBizCards Support
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-headline">
              How can we help?
            </h1>
            <p className="mt-1 text-xs text-primary-foreground/80 leading-relaxed">
              Find answers, troubleshooting tips, and hardware guides
            </p>

            {/* Mobile-First Search Input */}
            <div className="relative w-full mt-4">
              <div className="relative flex items-center w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles (e.g. NFC tap, iPhone)..."
                  className="w-full h-11 pl-10 pr-9 rounded-full bg-white text-foreground placeholder:text-muted-foreground text-xs border border-input shadow-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                    aria-label="Clear search"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* Instant Search Results Dropdown */}
              {searchQuery.trim() !== '' && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-card text-card-foreground rounded-xl shadow-2xl border border-border overflow-hidden z-30 text-left max-h-[300px] overflow-y-auto">
                  <div className="p-2.5 bg-muted/50 border-b border-border/50 text-[11px] font-semibold text-muted-foreground flex justify-between items-center">
                    <span>Results ({searchResults.length})</span>
                    <button onClick={() => setSearchQuery('')} className="hover:text-foreground">Clear</button>
                  </div>
                  {searchResults.length > 0 ? (
                    <div className="divide-y divide-border/40">
                      {searchResults.map((article) => (
                        <Link
                          key={article.id}
                          href={`/help/${article.collectionSlug}`}
                          className="block p-3 hover:bg-muted/60 transition-colors group"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-semibold text-xs group-hover:text-primary transition-colors line-clamp-1">
                              {formatInlineText(article.title)}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium shrink-0">
                              {article.collectionName}
                            </span>
                          </div>
                          <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                            {formatInlineText(article.summary)}
                          </p>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 text-center text-xs text-muted-foreground">
                      No articles found matching &quot;{searchQuery}&quot;.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 6 Category Buttons Grid (Mobile-Ready 2-Column Flexbox Grid) */}
        <section className="px-4 py-5 w-full">
          <div className="flex items-center justify-between mb-3 px-0.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Help Categories
            </h2>
            <span className="text-[11px] text-muted-foreground font-medium">
              6 topics
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 w-full">
            {HELP_COLLECTIONS.map((col) => (
              <Link
                key={col.id}
                href={`/help/${col.slug}`}
                className="group flex flex-col justify-between p-3.5 rounded-xl border border-border bg-card hover:bg-muted/40 hover:border-primary/50 transition-all shadow-xs"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-2.5 group-hover:bg-primary/20 transition-colors">
                    {ICON_MAP[col.iconName] || <BookOpen className="w-5 h-5 text-primary" />}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {col.name}
                  </h3>
                  <p className="text-[11px] text-muted-foreground line-clamp-2 mt-1 leading-tight">
                    {col.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-3 pt-2 border-t border-border/40 text-[10px] text-muted-foreground font-semibold group-hover:text-primary">
                  <span>{col.articleCount} articles</span>
                  <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Articles Section */}
        <section className="px-4 py-3 w-full border-t border-border/50">
          <div className="flex items-center justify-between mb-2.5 px-0.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Popular Articles
            </h2>
            <Link
              href="/help/general"
              className="text-[11px] font-semibold text-primary hover:underline flex items-center gap-0.5"
            >
              <span>View all</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="flex flex-col gap-2 w-full">
            {POPULAR_ARTICLES.map((article, idx) => (
              <Link
                key={idx}
                href={`/help/${article.collectionSlug}`}
                className="group flex items-center justify-between p-3 rounded-xl border border-border bg-card hover:bg-muted/40 hover:border-primary/40 transition-all shadow-2xs"
              >
                <div className="space-y-0.5 pr-2">
                  <h3 className="font-semibold text-xs text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {formatInlineText(article.title)}
                  </h3>
                  <p className="text-[10px] text-muted-foreground">
                    {article.views}
                  </p>
                </div>
                <div className="h-7 w-7 rounded-full bg-muted/60 flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground shrink-0 transition-colors">
                  <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="px-4 py-4 w-full border-t border-border/50">
          <div className="mb-2.5 px-0.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-2">
            {HOME_FAQS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-card rounded-xl px-3.5 border border-border shadow-2xs"
              >
                <AccordionTrigger className="text-left font-semibold text-xs py-3 hover:no-underline hover:text-primary">
                  {formatInlineText(faq.question)}
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground leading-relaxed pt-0 pb-3">
                  {formatInlineText(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Mobile Contact Support Card */}
        <section className="px-4 py-3 pb-6 w-full">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-foreground">Need Direct Help?</h3>
                  <p className="text-[10px] text-muted-foreground">SoloBizCards support team is here</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-semibold">
                Online
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
              <div className="p-2 rounded-lg bg-muted/40 border border-border/50">
                <span className="text-[10px] text-muted-foreground block">Email Support</span>
                <a href="mailto:support@solobiz.cards" className="font-semibold text-primary truncate block hover:underline">
                  support@solobiz.cards
                </a>
              </div>
              <div className="p-2 rounded-lg bg-muted/40 border border-border/50">
                <span className="text-[10px] text-muted-foreground block">Live Hours</span>
                <span className="font-semibold text-foreground block">
                  Mon-Fri 9AM-5PM EST
                </span>
              </div>
            </div>

            <div className="flex gap-2 pt-1">
              <Button 
                onClick={() => setContactDialogOpen(true)}
                size="sm"
                className="flex-1 h-9 text-xs font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                Start Live Chat
              </Button>
              <Button 
                asChild
                variant="outline"
                size="sm"
                className="flex-1 h-9 text-xs font-semibold"
              >
                <a href="mailto:support@solobiz.cards?subject=Help%20Request">
                  <Mail className="w-3.5 h-3.5 mr-1.5" />
                  Email Support
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Support Dialog */}
      <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
        <DialogContent className="max-w-[360px] p-5 rounded-2xl">
          <DialogHeader className="text-left space-y-1">
            <DialogTitle className="text-base font-bold">Contact Support</DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Get assistance with card activation, order delivery, or your solo.Profile.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 py-2 text-xs">
            <div className="p-3 rounded-xl bg-muted/50 border border-border/60 space-y-1">
              <p className="font-semibold text-foreground">Live Support Hours</p>
              <p className="text-muted-foreground">Mon – Fri: 9:00 AM – 5:00 PM EST</p>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Average response: Under 2 hours</p>
            </div>
            
            <div className="flex flex-col gap-2 pt-1">
              <Button asChild className="w-full text-xs h-10 bg-primary">
                <a href="mailto:support@solobiz.cards?subject=Help%20Request%20-%20SoloBizCards">
                  <Mail className="h-3.5 w-3.5 mr-2" /> Send Email to support@solobiz.cards
                </a>
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setContactDialogOpen(false)} 
                className="w-full text-xs h-9"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Mobile-Ready Flex Footer */}
      <HelpFooter />
    </div>
  );
}
