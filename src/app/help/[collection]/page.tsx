"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  Search, 
  ChevronRight, 
  ArrowLeft, 
  BookOpen, 
  AlertCircle, 
  Package, 
  HelpCircle, 
  CreditCard, 
  Sparkles, 
  Folder,
  CheckCircle,
  Smile,
  Meh,
  Frown,
  Mail,
  X
} from 'lucide-react';
import { HelpHeader } from '@/components/help/HelpHeader';
import { HelpFooter } from '@/components/help/HelpFooter';
import { 
  getCollection, 
  getArticlesByCollection, 
  HELP_COLLECTIONS,
  HelpArticle 
} from '@/lib/help-data';
import { Button } from '@/components/ui/button';
import { FormattedContent, formatInlineText } from '@/components/help/FormattedContent';

const ICON_MAP: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-5 h-5 text-primary" />,
  AlertCircle: <AlertCircle className="w-5 h-5 text-primary" />,
  Package: <Package className="w-5 h-5 text-primary" />,
  HelpCircle: <HelpCircle className="w-5 h-5 text-primary" />,
  CreditCard: <CreditCard className="w-5 h-5 text-primary" />,
  Sparkles: <Sparkles className="w-5 h-5 text-primary" />,
};

export default function CollectionPage() {
  const params = useParams();
  const collectionSlug = typeof params.collection === 'string' ? params.collection : '';
  const collection = getCollection(collectionSlug);

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>(null);
  const [feedbackGiven, setFeedbackGiven] = useState<Record<string, string>>({});

  const articles = useMemo(() => {
    if (!collection) return [];
    const all = getArticlesByCollection(collection.slug);
    if (!searchQuery.trim()) return all;
    const q = searchQuery.toLowerCase().trim();
    return all.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.content.toLowerCase().includes(q)
    );
  }, [collection, searchQuery]);

  if (!collection) {
    return (
      <div className="flex flex-col min-h-dvh w-full bg-background text-foreground">
        <HelpHeader showBackToHelp backHref="/help" />
        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="p-3 bg-muted rounded-full mb-3">
            <AlertCircle className="w-8 h-8 text-muted-foreground" />
          </div>
          <h1 className="text-lg font-bold mb-1">Collection Not Found</h1>
          <p className="text-xs text-muted-foreground mb-4 max-w-xs">
            The help collection you are looking for does not exist.
          </p>
          <Button size="sm" asChild>
            <Link href="/help">Back to Help Center</Link>
          </Button>
        </main>
        <HelpFooter />
      </div>
    );
  }

  const toggleArticle = (id: string) => {
    setExpandedArticleId((prev) => (prev === id ? null : id));
  };

  const handleFeedback = (articleId: string, type: string) => {
    setFeedbackGiven((prev) => ({ ...prev, [articleId]: type }));
  };

  return (
    <div className="flex flex-col min-h-dvh w-full bg-background text-foreground">
      {/* Mobile-Ready Flex Header with Back Button */}
      <HelpHeader showBackToHelp backHref="/help" />

      <main className="flex-1 flex flex-col w-full">
        {/* Collection Header Banner */}
        <section className="bg-muted/20 border-b border-border/60 px-4 py-4">
          <div className="flex flex-col w-full">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-[11px] text-muted-foreground mb-3" aria-label="Breadcrumb">
              <Link 
                href="/help" 
                className="hover:text-primary transition-colors flex items-center gap-1 font-medium"
              >
                All Collections
              </Link>
              <span>/</span>
              <span className="text-foreground font-semibold truncate">
                {collection.name}
              </span>
            </nav>

            {/* Collection Header Flex Card */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                {ICON_MAP[collection.iconName] || <Folder className="w-5 h-5 text-primary" />}
              </div>
              <div className="space-y-0.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-base sm:text-lg font-bold tracking-tight font-headline">
                    {collection.name}
                  </h1>
                  <span className="px-2 py-0.2 rounded-full text-[10px] font-semibold bg-muted text-muted-foreground border border-border/80">
                    {collection.articleCount} articles
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-snug">
                  {collection.description}
                </p>
              </div>
            </div>

            {/* In-Collection Search Input */}
            <div className="relative mt-3.5 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${collection.name}...`}
                className="w-full h-10 pl-9 pr-8 rounded-xl bg-background border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Articles Listing */}
        <section className="px-4 py-4 flex-1">
          {articles.length > 0 ? (
            <div className="flex flex-col gap-2.5 w-full">
              {articles.map((article) => {
                const isExpanded = expandedArticleId === article.id;
                const feedback = feedbackGiven[article.id];

                return (
                  <div
                    key={article.id}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden bg-card shadow-2xs ${
                      isExpanded
                        ? 'border-primary/50 ring-1 ring-primary/20'
                        : 'border-border hover:border-primary/40'
                    }`}
                  >
                    {/* Article Tap Target Header */}
                    <button
                      onClick={() => toggleArticle(article.id)}
                      className="w-full text-left p-3.5 flex items-start justify-between gap-3 transition-colors group"
                    >
                      <div className="space-y-1 flex-1">
                        <h3 className="font-semibold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                          {formatInlineText(article.title)}
                        </h3>
                        <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                          {formatInlineText(article.summary)}
                        </p>
                        <div className="flex items-center gap-2 pt-0.5 text-[10px] text-muted-foreground">
                          <span>{article.lastUpdated}</span>
                          {article.views && (
                            <>
                              <span>•</span>
                              <span>{article.views}</span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="shrink-0 mt-0.5">
                        <div className={`h-6 w-6 rounded-full flex items-center justify-center transition-transform duration-200 ${
                          isExpanded 
                            ? 'bg-primary text-primary-foreground rotate-90' 
                            : 'bg-muted/70 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                        }`}>
                          <ChevronRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </button>

                    {/* Expanded Article Answer */}
                    {isExpanded && (
                      <div className="px-3.5 pb-4 pt-2.5 border-t border-border/40 bg-muted/20 animate-in fade-in-50 duration-150">
                        <FormattedContent content={article.content} />

                        {/* Reaction / Helpful prompt */}
                        <div className="mt-4 pt-3 border-t border-border/50 flex flex-col gap-2">
                          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                            <span>Was this helpful?</span>
                            {feedback ? (
                              <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                <CheckCircle className="h-3 w-3" /> Thanks for your feedback!
                              </span>
                            ) : (
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => handleFeedback(article.id, 'smiley')}
                                  className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-emerald-600"
                                  title="Helpful"
                                >
                                  <Smile className="h-3.5 w-3.5" />
                                </button>
                                <button
                                  onClick={() => handleFeedback(article.id, 'neutral')}
                                  className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-amber-500"
                                  title="Neutral"
                                >
                                  <Meh className="h-3.5 w-3.5" />
                                </button>
                                <button
                                  onClick={() => handleFeedback(article.id, 'disappointed')}
                                  className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-red-500"
                                  title="Not helpful"
                                >
                                  <Frown className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-10 bg-card rounded-xl border border-border p-5">
              <Search className="w-8 h-8 text-muted-foreground mx-auto mb-2 opacity-60" />
              <h3 className="text-xs font-semibold mb-0.5">No articles found</h3>
              <p className="text-[11px] text-muted-foreground max-w-xs mx-auto mb-3">
                No matching articles found for &quot;{searchQuery}&quot;.
              </p>
              <Button variant="outline" size="sm" onClick={() => setSearchQuery('')} className="text-xs h-8">
                Clear Search
              </Button>
            </div>
          )}

          {/* Bottom Callout */}
          <div className="mt-6 p-4 rounded-xl bg-card border border-border shadow-xs flex flex-col gap-2.5 text-center">
            <div>
              <h4 className="font-semibold text-xs text-foreground">Still need assistance?</h4>
              <p className="text-[10px] text-muted-foreground">
                Reach out to our customer support team directly.
              </p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" asChild variant="outline" className="flex-1 text-xs h-8">
                <Link href="/help">All Topics</Link>
              </Button>
              <Button size="sm" asChild className="flex-1 text-xs h-8 bg-primary hover:bg-primary/90">
                <a href="mailto:support@solobiz.cards?subject=Help%20Question">
                  <Mail className="w-3.5 h-3.5 mr-1" />
                  Email Support
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile-Ready Flex Footer */}
      <HelpFooter />
    </div>
  );
}
