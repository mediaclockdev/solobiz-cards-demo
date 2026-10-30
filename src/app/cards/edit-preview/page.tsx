'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Send, 
  UserPlus, 
  Flame, 
  ChevronsUpDown,
  Compass,
  Mail,
  Phone,
  Facebook,
  TrendingUp,
  Palette,
  Users,
  Download,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function EditPreviewPage() {
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  
  const mapImage = PlaceHolderImages.find(p => p.id === 'map-header');
  const avatarImage = PlaceHolderImages.find(p => p.id === 'rob-buc-avatar');

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-foreground pb-24">
      {/* Header - Conditionally rendered based on mode */}
      {activeTab === 'edit' ? (
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md h-14 flex items-center px-4 justify-between border-b">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 bg-slate-50">
            <UserPlus className="h-4 w-4 text-indigo-500" />
          </Button>
          <div className="text-indigo-600 font-black text-lg">solo.</div>
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 bg-slate-50">
            <Send className="h-4 w-4 text-indigo-500" />
          </Button>
        </header>
      ) : (
        <header className="h-12 flex items-center justify-center pt-4 pb-2">
          <div className="text-indigo-600 font-black text-sm lowercase tracking-tighter">solo.</div>
        </header>
      )}

      <main className="px-4 py-0 space-y-6">
        {/* Profile Card Hero */}
        <div className="relative mb-14">
          {/* Cover Image with 2px border and 30px radius */}
          <div className="h-44 relative rounded-[30px] overflow-hidden border-2 border-indigo-500 shadow-sm bg-white">
            <Image 
              src={mapImage?.imageUrl || "https://picsum.photos/seed/map/600/300"}
              alt="Profile Header"
              fill
              className="object-cover"
              data-ai-hint="city map"
            />
          </div>
            
          {/* Toggle Switch - Positioned to straddle the border (half and half) */}
          <div className="absolute bottom-0 right-6 translate-y-1/2 bg-white p-1 rounded-full flex shadow-lg z-20 border-2 border-slate-100">
            <button 
              onClick={() => setActiveTab('edit')}
              className={cn(
                "px-5 py-2 rounded-full text-[10px] font-black transition-all",
                activeTab === 'edit' ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-600"
              )}
            >
              edit
            </button>
            <button 
              onClick={() => setActiveTab('preview')}
              className={cn(
                "px-5 py-2 rounded-full text-[10px] font-black transition-all",
                activeTab === 'preview' ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-600"
              )}
            >
              preview
            </button>
          </div>

          {/* Overlapping Avatar - Circular with 2px border, 90% inside cover image */}
          <div className="absolute bottom-0 left-6 translate-y-[10%] z-10">
            <div className="w-28 h-28 rounded-full border-2 border-indigo-500 shadow-xl p-0.5 bg-white overflow-hidden">
              <div className="w-full h-full relative rounded-full overflow-hidden">
                <Image 
                  src={avatarImage?.imageUrl || "https://picsum.photos/seed/rob/200/200"}
                  alt="Rob Buc"
                  fill
                  className="object-cover"
                  data-ai-hint="woman portrait"
                />
              </div>
            </div>
          </div>
        </div>

        {/* User Info Section */}
        <div className="space-y-4 px-2">
          <div className="space-y-1">
            <h1 className="text-2xl font-black text-slate-900 leading-tight uppercase tracking-tight">rob buc</h1>
            <p className="text-sm font-bold text-slate-600">a me too tiks a kicks oiuwhd h w</p>
          </div>

          <div className="flex gap-3 text-[11px] text-slate-400 font-bold border-l-2 border-indigo-200 pl-3 py-1 leading-relaxed">
            <div className="space-y-0.5">
              <p>CEO | <span className="text-slate-500">Abc Inc</span></p>
              <p>123 Main St. Miami, FL</p>
              <p>UTECH, JA</p>
            </div>
          </div>
        </div>

        {/* Action Buttons - Mode Dependent */}
        <div className="flex gap-2 pt-2">
          {activeTab === 'edit' ? (
            <>
              <Button asChild className="flex-1 h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-[30px] shadow-lg shadow-indigo-100 text-lg transition-transform active:scale-95">
                <Link href="/setup">Edit Profile</Link>
              </Button>
              <Button size="icon" className="h-14 w-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[30px] shadow-lg shadow-indigo-100 transition-transform active:scale-95">
                <Flame className="h-6 w-6" />
              </Button>
            </>
          ) : (
            <>
              <Button className="flex-1 h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-[30px] shadow-lg shadow-indigo-100 text-lg transition-transform active:scale-95">
                Exchange Contact
              </Button>
              <Button size="icon" className="h-14 w-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[30px] shadow-lg shadow-indigo-100 transition-transform active:scale-95">
                <Download className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>

        {/* Contacts List */}
        <div className="space-y-3 pt-4">
          <ContactItem 
            icon={<Facebook className="h-6 w-6" />} 
            label="Facebook" 
            value="facebook.com/profile.php?id=61579757766527" 
            color="bg-indigo-500" 
            mode={activeTab}
          />
          <ContactItem 
            icon={<Compass className="h-6 w-6" />} 
            label="website" 
            value="ibm.com" 
            color="bg-indigo-400" 
            mode={activeTab}
          />
          <ContactItem 
            icon={<Mail className="h-6 w-6" />} 
            label="email" 
            value="ameyuo@gmail.com" 
            color="bg-indigo-400" 
            mode={activeTab}
          />
          <ContactItem 
            icon={<Phone className="h-6 w-6" />} 
            label="phone" 
            value="+1 (786) 788-6983" 
            color="bg-indigo-400" 
            mode={activeTab}
          />
          <ContactItem 
            icon={<Phone className="h-6 w-6" />} 
            label="office" 
            value="+1 (301) 433-4422" 
            color="bg-indigo-400" 
            mode={activeTab}
          />
        </div>

        {/* Preview Mode Branding */}
        {activeTab === 'preview' && (
          <div className="pt-10 space-y-4 flex flex-col items-center">
            <div className="w-full h-24 rounded-[30px] border-2 border-indigo-100 flex flex-col items-center justify-center bg-white shadow-sm">
              <div className="text-indigo-600 font-black text-2xl flex items-center gap-1">
                solo.<span className="text-slate-400 font-bold">Profile</span>
              </div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">
                NETWORKING MADE SIMPLE
              </div>
            </div>
            <Link href="#" className="flex items-center gap-1.5 text-indigo-500 font-bold text-xs hover:underline mb-8">
              Remove Branding <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}
      </main>

      {/* Bottom Navigation - Only in Edit mode */}
      {activeTab === 'edit' && (
        <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] bg-white border-t px-8 py-6 flex justify-between items-center rounded-t-[30px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20">
          <NavAction icon={<TrendingUp className="h-5 w-5" />} label="INSIGHTS" />
          <NavAction icon={<Palette className="h-5 w-5" />} label="STYLE" />
          <NavAction icon={<Users className="h-5 w-5" />} label="CONTACTS" />
          <div className="relative">
            <div className="w-14 h-14 rounded-full border-2 border-slate-900 p-0.5 shadow-md">
              <div className="w-full h-full relative rounded-full overflow-hidden">
                 <Image 
                  src={avatarImage?.imageUrl || ""}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

function ContactItem({ icon, label, value, color, mode }: { icon: React.ReactNode, label: string, value: string, color: string, mode: 'edit' | 'preview' }) {
  return (
    <div className="flex items-center gap-4 px-4 py-0 bg-white rounded-[20px] shadow-sm border border-slate-100 hover:border-indigo-100 transition-all group cursor-pointer">
      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md my-4", color)}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-base font-black text-slate-900 leading-tight">{label}</p>
        <p className="text-xs font-bold text-slate-400 truncate">{value}</p>
      </div>
      <div className="text-slate-300 group-hover:text-indigo-400 transition-colors">
        {mode === 'edit' ? (
          <ChevronsUpDown className="h-6 w-6" />
        ) : (
          <ArrowRight className="h-6 w-6 text-slate-900" />
        )}
      </div>
    </div>
  );
}

function NavAction({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="flex flex-col items-center gap-2 group">
      <div className="text-slate-400 group-hover:text-indigo-500 transition-colors">
        {icon}
      </div>
      <span className="text-[9px] font-black text-slate-400 group-hover:text-indigo-500 tracking-widest">
        {label}
      </span>
    </button>
  );
}
