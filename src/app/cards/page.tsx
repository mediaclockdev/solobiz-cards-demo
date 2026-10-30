'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Users, 
  Briefcase, 
  Mail, 
  Phone, 
  Calendar, 
  Plus,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';

export default function CardsPage() {
  const wizardImage = PlaceHolderImages.find(p => p.id === 'jane-doeington-avatar');

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-foreground pb-8">
      <header className="sticky top-0 z-10 bg-white border-b h-14 flex items-center px-4 justify-between">
        <Button variant="ghost" size="icon" className="rounded-full" asChild>
          <Link href="/setup">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="font-bold text-lg">Cards</h1>
        <div className="w-10" />
      </header>

      <main className="p-4 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 pb-2">
          <Button variant="outline" size="sm" className="whitespace-nowrap bg-white text-slate-500 border-slate-200 h-9 px-4 rounded-full text-xs font-bold">
            Local Cards (0)
          </Button>
          <Button variant="outline" size="sm" className="whitespace-nowrap border-indigo-600 text-indigo-600 bg-white h-9 px-4 rounded-full text-xs font-bold shadow-sm">
            My Cards (1/2)
          </Button>
          <Button variant="outline" size="sm" className="whitespace-nowrap bg-white text-slate-900 border-slate-200 h-9 px-4 rounded-full text-xs font-bold gap-1.5">
            <Users className="h-3.5 w-3.5" />
            Members Directory (13)
          </Button>
          <Button variant="outline" size="sm" className="whitespace-nowrap bg-white text-slate-900 border-slate-200 h-9 px-4 rounded-full text-xs font-bold gap-1.5">
            <Briefcase className="h-3.5 w-3.5" />
            Opportunities
          </Button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Existing Card - Wrapped in Link */}
          <Link href="/cards/edit-preview" className="block transition-transform active:scale-95">
            <Card className="overflow-hidden border-none shadow-sm rounded-[30px] bg-white h-full">
              <div className="relative h-24 w-full">
                <Image 
                  src={wizardImage?.imageUrl || "https://picsum.photos/seed/wizard/400/250"}
                  alt="Profile Header"
                  fill
                  className="object-cover"
                  data-ai-hint="wizard portrait"
                />
                <Badge variant="secondary" className="absolute top-3 right-3 bg-white/90 text-slate-500 text-[9px] h-5 px-2 border-none font-bold rounded-full">
                  Private
                </Badge>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500" />
              </div>
              <CardContent className="p-4 space-y-3">
                <div className="space-y-0.5">
                  <h3 className="text-sm font-black text-slate-900 leading-tight">Jane Doeington</h3>
                  <p className="text-[10px] font-bold text-indigo-500">
                    CEO <span className="text-slate-900">• Studio Inc.</span>
                  </p>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Mail className="h-3 w-3 text-blue-400" />
                    <span className="text-[9px] font-medium truncate">mediaclockdev@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Phone className="h-3 w-3 text-blue-400" />
                    <span className="text-[9px] font-medium">+1 (151) 515-1515</span>
                  </div>
                </div>

                <Separator className="bg-slate-100 my-2" />
                
                <div className="flex items-center justify-between text-[8px] font-bold text-slate-400 uppercase tracking-tight">
                  <span className="text-indigo-400 truncate mr-1">jane-doeington</span>
                  <div className="flex items-center gap-0.5 whitespace-nowrap">
                    <Calendar className="h-2 w-2" />
                    JAN 13, 2026
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Add Card Button */}
          <Link href="/setup" className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-[30px] bg-white aspect-square hover:bg-slate-50 transition-all active:scale-95 group">
            <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Plus className="h-6 w-6 text-indigo-600 stroke-[3px]" />
            </div>
            <span className="text-sm font-black text-slate-900">Add Card</span>
            <span className="text-[9px] text-slate-400 mt-1">Click here to add new card</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
