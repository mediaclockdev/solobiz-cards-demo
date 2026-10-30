'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Plus, 
  Upload, 
  Search, 
  Phone, 
  Mail, 
  Globe, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  MapPin, 
  Info, 
  Clipboard, 
  ExternalLink, 
  User, 
  Heading, 
  Zap, 
  Megaphone, 
  ImageIcon, 
  Crown, 
  X as XIcon, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Twitch,
  Check,
  Sparkles,
  Minus,
  DollarSign,
  Music,
  Calendar,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";

const COUNTRIES = [
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'Mexico', code: '+52', flag: '🇲🇽' },
  { name: 'Afghanistan', code: '+93', flag: '🇦🇫' },
  { name: 'Åland Islands', code: '+358', flag: '🇦🇽' },
  { name: 'Albania', code: '+355', flag: '🇦🇱' },
  { name: 'Algeria', code: '+213', flag: '🇩🇿' },
  { name: 'American Samoa', code: '+1', flag: '🇦🇸' },
];

const PREMIUM_ITEMS = ['Direct Ads', 'Call-to-Action', 'Photos', 'Custom Title', 'Document'];

function UpgradePopup({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('annual');

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent aria-describedby={undefined} 
        side="bottom" 
        className="mx-auto w-full max-w-[500px] p-0 border-none bg-[#E7E9FF] rounded-t-[30px] overflow-hidden shadow-2xl [&>button]:hidden"
      >
        <div className="relative p-6 pb-4">
          <button 
            onClick={() => onOpenChange(false)}
            className="absolute right-6 top-6 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors"
          >
            <XIcon className="w-4 h-4 text-slate-600" />
          </button>

          <div className="space-y-1 pr-8">
            <DialogPrimitive.Title asChild><h2 className="text-2xl font-black text-slate-900 tracking-tight">Upgrade to solo.Pro+</h2></DialogPrimitive.Title>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              7 days free to try the advanced networking tool kit
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <button 
              onClick={() => setBilling('monthly')}
              className={cn(
                "relative flex flex-col items-start p-4 rounded-[20px] border-2 transition-all text-left",
                billing === 'monthly' ? "bg-white border-indigo-500 shadow-md" : "bg-white/40 border-transparent"
              )}
            >
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Monthly</span>
              <span className="text-lg font-black text-slate-900">$15/month</span>
              <span className="text-[10px] text-slate-400 mt-1">Billed monthly</span>
              <div className={cn(
                "absolute bottom-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center",
                billing === 'monthly' ? "bg-indigo-500 border-indigo-500" : "border-slate-200"
              )}>
                {billing === 'monthly' && <Check className="w-3 h-3 text-white stroke-[3px]" />}
              </div>
            </button>

            <button 
              onClick={() => setBilling('annual')}
              className={cn(
                "relative flex flex-col items-start p-4 rounded-[20px] border-2 transition-all text-left",
                billing === 'annual' ? "bg-white border-indigo-500 shadow-md" : "bg-white/40 border-transparent"
              )}
            >
              <div className="absolute -top-2 -right-2 bg-indigo-500 text-white text-[8px] font-black px-2 py-1 rounded-full shadow-sm">
                SAVE 20%
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Annual</span>
              <span className="text-lg font-black text-slate-900">$12/month</span>
              <span className="text-[10px] text-slate-400 mt-1"><del>$180</del> $144/year</span>
              <div className={cn(
                "absolute bottom-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center",
                billing === 'annual' ? "bg-indigo-500 border-indigo-500" : "border-slate-200"
              )}>
                {billing === 'annual' && <Check className="w-3 h-3 text-white stroke-[3px]" />}
              </div>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-t-[30px] p-6 pt-8 space-y-3">
          <div className="group flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-[20px] transition-colors cursor-pointer border border-transparent hover:border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-indigo-500" />
              </div>
              <span className="text-sm font-bold text-slate-900">Use AI Business Card Scanner</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300" />
          </div>

          <div className="group flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-[20px] transition-colors cursor-pointer border border-transparent hover:border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
              </div>
              <span className="text-sm font-bold text-slate-900">Add Your Logo</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300" />
          </div>

          <div className="pt-4 space-y-4">
            <div className="flex items-center gap-2 px-2">
              <Checkbox id="dont-ask" className="rounded-sm border-slate-200" />
              <label htmlFor="dont-ask" className="text-xs font-bold text-slate-400">
                Don't ask me again
              </label>
            </div>

            <Button className="w-full h-14 rounded-[20px] bg-indigo-600 hover:bg-indigo-700 text-white font-black text-lg shadow-lg shadow-indigo-200 flex items-center justify-center gap-3 group transition-transform active:scale-95">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                 <Plus className="w-4 h-4 text-white stroke-[4px]" />
              </div>
              Start Free Trial
            </Button>

            <div className="text-center space-y-1">
              <p className="text-[10px] font-bold text-slate-400">
                Subscribe for <del>$180</del> $144/year
              </p>
              <p className="text-[10px] text-slate-400">
                Cancel anytime, plan renews automatically
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function AddContent2Page() {
  const router = useRouter();
  const [activeContentDetail, setActiveContentDetail] = useState<string | null>(null);
  const [showTitleField, setShowTitleField] = useState(false);
  const [showCountrySelector, setShowCountrySelector] = useState(false);
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [textContent, setTextContent] = useState('');
  
  const [showAllContactInfo, setShowAllContactInfo] = useState(false);
  const [showAllSocialLinks, setShowAllSocialLinks] = useState(false);
  const [showAllProductivityLinks, setShowAllProductivityLinks] = useState(false);
  const [showAllPaymentLinks, setShowAllPaymentLinks] = useState(false);
  const [showAllMusicLinks, setShowAllMusicLinks] = useState(false);

  const handleAddContentAction = () => {
    if (activeContentDetail && PREMIUM_ITEMS.includes(activeContentDetail)) {
      setShowUpgradePopup(true);
    } else {
      setActiveContentDetail(null);
    }
  };

  const filteredCountries = COUNTRIES.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.code.includes(searchQuery)
  );

  const ContentItem = ({ icon: Icon, label, colorClass, isCustom = false, svg, isPremium = false }: { icon?: any, label: string, colorClass: string, isCustom?: boolean, svg?: React.ReactNode, isPremium?: boolean }) => (
    <div 
      className="relative flex flex-col items-center justify-center p-2 bg-white rounded-xl border border-slate-100 shadow-sm w-full h-[84px] transition-all hover:scale-105 active:scale-95 cursor-pointer hover:border-slate-200"
      onClick={() => {
        setActiveContentDetail(label);
        setShowTitleField(false);
        setTextContent('');
      }}
    >
      {isPremium && (
        <div className="absolute -top-1.5 -right-1.5 z-20 bg-white rounded-full p-0.5 shadow-md border border-slate-100">
          <Crown className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
        </div>
      )}
      <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center text-white mb-1.5 shrink-0", colorClass)}>
        {isCustom ? svg : Icon && <Icon className="h-5 w-5" />}
      </div>
      <div className="flex flex-col items-center text-center gap-0.5">
        <span className="text-[10px] font-bold text-slate-900 leading-tight line-clamp-2 px-0.5">{label}</span>
      </div>
    </div>
  );

  if (activeContentDetail) {
    const isPhone = activeContentDetail === 'Phone';
    const isEmail = activeContentDetail === 'Email';
    const isTextBased = activeContentDetail === 'About Me' || activeContentDetail === 'Custom Title';
    const isDirectAds = activeContentDetail === 'Direct Ads';
    const isLocation = activeContentDetail === 'Location' || activeContentDetail === 'Address';
    const isPhotos = activeContentDetail === 'Photos';

    return (
      <div className="flex flex-col min-h-screen bg-[#f8f9fb] text-foreground">
        <header className="sticky top-0 z-10 bg-white border-b h-14 flex items-center px-4">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setActiveContentDetail(null)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="flex-1 text-center font-bold text-lg mr-10">Add {activeContentDetail}</h1>
        </header>

        <main className="p-4 space-y-4 pb-24">
          <Card className="rounded-[30px] shadow-sm border overflow-hidden">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center text-white",
                    isPhone ? "bg-green-500" : 
                    isEmail ? "bg-blue-400" : 
                    isTextBased ? "bg-slate-800" : 
                    isDirectAds ? "bg-red-600" : 
                    isLocation ? "bg-red-500" :
                    isPhotos ? "bg-slate-100" :
                    "bg-blue-600"
                  )}>
                    {isPhone ? <Phone className="h-3.5 w-3.5" /> : 
                     isEmail ? <Mail className="h-3.5 w-3.5" /> : 
                     isTextBased ? (activeContentDetail === 'About Me' ? <User className="h-3.5 w-3.5" /> : <Heading className="h-3.5 w-3.5" />) : 
                     isDirectAds ? <Megaphone className="h-3.5 w-3.5" /> : 
                     isLocation ? <MapPin className="h-3.5 w-3.5" /> :
                     isPhotos ? <ImageIcon className="h-3.5 w-3.5 text-slate-900" /> :
                     <Globe className="h-3.5 w-3.5" />}
                  </div>
                  <span className="text-xs font-bold">{activeContentDetail}</span>
                </div>
                <Info className="h-4 w-4 text-slate-300" />
              </div>

              {isPhone ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 h-12 border rounded-xl px-3 bg-white">
                    <button 
                      onClick={() => setShowCountrySelector(true)}
                      className="flex items-center gap-1 pr-2 border-r h-full hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-xl">{selectedCountry.flag}</span>
                      <ChevronDown className="h-3 w-3 text-slate-400" />
                      <span className="text-sm font-medium">{selectedCountry.code}</span>
                    </button>
                    <Input 
                      placeholder="(123) 456-7890" 
                      className="border-none shadow-none focus-visible:ring-0 p-0 text-sm h-full"
                    />
                  </div>
                  <button className="text-[11px] font-bold text-slate-900 ml-2 hover:underline">+ Add Extension</button>
                  <div className="flex bg-slate-100 rounded-full p-1">
                    <button className="flex-1 py-1.5 text-xs font-bold text-slate-400">Text</button>
                    <button className="flex-1 py-1.5 text-xs font-bold bg-white rounded-full shadow-sm">Call</button>
                  </div>
                </div>
              ) : isEmail ? (
                <div className="space-y-4">
                  <Input placeholder="email" className="h-12 rounded-xl text-sm" />
                  <Button variant="outline" className="w-full h-11 rounded-full text-xs font-bold border-slate-200 flex items-center gap-2 transition-transform active:scale-95">
                    <Clipboard className="h-4 w-4" /> Paste
                  </Button>
                </div>
              ) : isTextBased ? (
                <div className="space-y-2">
                   <div className="flex justify-between items-center text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-1">
                    <span>Short Bio, Company Description, etc.</span>
                    <span>{textContent.length}/250</span>
                  </div>
                  <Textarea 
                    value={textContent}
                    onChange={(e) => setTextContent(e.target.value)}
                    placeholder="Share your professional background..." 
                    className="min-h-[140px] rounded-[20px] text-sm border-slate-200 focus-visible:ring-slate-400 bg-white p-4"
                    maxLength={250}
                  />
                </div>
              ) : isDirectAds ? (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-sm font-bold text-slate-900">
                      Direct Ads Type <span className="text-destructive">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full h-12 rounded-xl bg-white border-slate-200">
                        <SelectValue placeholder="Select One" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="product">Product</SelectItem>
                        <SelectItem value="event">Event</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-bold text-slate-900">Product Image</Label>
                    <div className="border-2 border-dashed border-slate-200 rounded-[30px] p-8 flex flex-col items-center justify-center text-center space-y-3 bg-white hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                        <Upload className="h-6 w-6 text-slate-400" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-slate-900">Click to upload or drag and drop</p>
                        <p className="text-xs text-muted-foreground">JPG, PNG or GIF (max. 5MB)</p>
                      </div>
                      <Button variant="link" className="text-blue-600 font-bold h-auto p-0 hover:text-blue-700">
                        Browse files
                      </Button>
                    </div>
                  </div>
                </div>
              ) : isLocation ? (
                <div className="space-y-6">
                  <div className="space-y-2 p-4 bg-white border rounded-[20px] shadow-sm">
                    <Label className="text-xs font-bold text-slate-900">Address</Label>
                    <Input placeholder="123 Main St" className="h-11 rounded-xl border-slate-200 bg-white" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 p-4 bg-white border rounded-[20px] shadow-sm">
                      <Label className="text-xs font-bold text-slate-900">City</Label>
                      <Input placeholder="City" className="h-11 rounded-xl border-slate-200 bg-white" />
                    </div>
                    <div className="space-y-2 p-4 bg-white border rounded-[20px] shadow-sm">
                      <Label className="text-xs font-bold text-slate-900">State</Label>
                      <Input placeholder="State" className="h-11 rounded-xl border-slate-200 bg-white" />
                    </div>
                  </div>
                </div>
              ) : isPhotos ? (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-slate-200 rounded-[30px] p-8 flex flex-col items-center justify-center text-center space-y-3 bg-white hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                      <Upload className="h-6 w-6 text-slate-400" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-slate-900">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground">JPG, PNG or GIF (max. 5MB)</p>
                    </div>
                    <Button variant="link" className="text-blue-600 font-bold h-auto p-0 hover:text-blue-700">
                      Browse files
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <Input placeholder="link" className="h-12 rounded-xl text-sm" />
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-11 rounded-full text-xs font-bold border-slate-200 flex items-center gap-2 transition-transform active:scale-95">
                      <Clipboard className="h-4 w-4" /> Paste
                    </Button>
                    <Button className="h-11 rounded-full text-xs font-bold bg-indigo-400 hover:bg-indigo-50 text-white flex items-center gap-2 transition-transform active:scale-95">
                      Test <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {!showTitleField ? (
            <Button 
              variant="outline" 
              className="w-full h-12 rounded-full text-xs font-bold border-slate-200 bg-white transition-transform active:scale-95"
              onClick={() => setShowTitleField(true)}
            >
              + Add Title
            </Button>
          ) : (
            <div className="space-y-1.5 px-2">
              <Label className="text-[11px] font-bold px-2">Title</Label>
              <Input className="h-12 rounded-xl border-slate-900" />
            </div>
          )}
        </main>

        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] p-6 bg-white border-t rounded-t-[30px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          <Button 
            onClick={handleAddContentAction}
            className="w-full h-14 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-bold transition-transform active:scale-95"
          >
            Add
          </Button>
        </div>

        <UpgradePopup open={showUpgradePopup} onOpenChange={setShowUpgradePopup} />

        <Dialog open={showCountrySelector} onOpenChange={setShowCountrySelector}>
          <DialogContent aria-describedby={undefined} className="max-w-[400px] p-0 border-none bg-white rounded-[30px] overflow-hidden shadow-2xl [&>button]:hidden">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 bg-slate-50 transition-transform active:scale-95" onClick={() => setShowCountrySelector(false)}>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <DialogPrimitive.Title asChild><h2 className="text-xl font-bold flex-1 text-center pr-10">Select Country</h2></DialogPrimitive.Title>
              </div>
              
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search for country code" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 h-12 bg-slate-50 border-none rounded-xl"
                />
              </div>

              <div className="max-h-[400px] overflow-auto space-y-1 pr-1 custom-scrollbar">
                {filteredCountries.map((country, idx) => (
                  <button
                    key={`${country.name}-${idx}`}
                    onClick={() => {
                      setSelectedCountry(country);
                      setShowCountrySelector(false);
                      setSearchQuery('');
                    }}
                    className={cn(
                      "w-full flex items-center justify-between p-4 rounded-xl transition-colors hover:bg-slate-50",
                      selectedCountry.name === country.name && "bg-indigo-50 text-indigo-700"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{country.flag}</span>
                      <span className="text-sm font-bold">{country.name}</span>
                    </div>
                    <span className="text-sm font-medium opacity-60">{country.code}</span>
                  </button>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fb] text-foreground pb-8">
      <header className="sticky top-0 z-10 bg-white border-b h-14 flex items-center px-4">
        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 transition-transform active:scale-95" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="flex-1 text-center font-bold text-lg mr-10">Add Content Duplicate</h1>
      </header>

      <main className="p-4 pb-24">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search content types" 
            className="pl-11 h-12 bg-white border-none shadow-sm rounded-xl focus-visible:ring-slate-200"
          />
        </div>

        <div className="text-[10px] font-bold text-muted-foreground tracking-wider px-4 uppercase mt-6 mb-3">Recommended Content</div>
        <div className="grid grid-cols-4 gap-2 px-1">
          <ContentItem icon={Phone} label="Phone" colorClass="bg-green-500" />
          <ContentItem icon={Globe} label="Website" colorClass="bg-blue-600" />
          <ContentItem icon={Mail} label="Email" colorClass="bg-blue-400" />
          <ContentItem icon={MapPin} label="Location" colorClass="bg-red-500" />
          <ContentItem icon={Linkedin} label="LinkedIn" colorClass="bg-blue-700" />
          <ContentItem icon={Instagram} label="Instagram" colorClass="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" />
        </div>

        <div className="text-[10px] font-bold text-muted-foreground tracking-wider px-4 uppercase mt-8 mb-3">Contact Info</div>
        <div className="grid grid-cols-4 gap-2 px-1">
          <ContentItem icon={Globe} label="Website" colorClass="bg-blue-600" />
          <ContentItem icon={Mail} label="Email" colorClass="bg-blue-400" />
          <ContentItem icon={Phone} label="Phone" colorClass="bg-green-500" />
          
          {showAllContactInfo && (
            <>
              <ContentItem icon={MapPin} label="Address" colorClass="bg-red-500" />
              <ContentItem 
                label="WhatsApp" 
                colorClass="bg-[#25D366]" 
                isCustom 
                svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03a11.784 11.784 0 001.635 6.01L0 24l6.102-1.601a11.745 11.745 0 005.946 1.604h.005c6.634 0 12.032-5.396 12.035-12.032.003-3.218-1.248-6.242-4.522-8.514z"/></svg>} 
              />
              <ContentItem 
                label="Discord" 
                colorClass="bg-[#5865F2]" 
                isCustom 
                svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 11.721 11.721 0 00-.617-1.25.077.077 0 00-.079-.037 19.736 19.736 0 00-4.885 1.515.069.069 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.862-1.297 1.199-1.99a.076.076 0 00-.041-.105 13.027 13.027 0 01-1.873-.894.076.076 0 00-.041.107c.34.69.74 1.36 1.2 1.985a.076.076 0 00.082.028 19.829 19.829 0 006.054-3.03a.076.076 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>} 
              />
              <ContentItem 
                label="WeChat" 
                colorClass="bg-[#07C160]" 
                isCustom 
                svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M8.522 2.503c-4.276 0-7.742 3.093-7.742 6.908 0 2.067 1.018 3.923 2.656 5.253l-.685 2.043 2.373-1.186a8.23 8.23 0 003.398.718c.245 0 .484-.015.72-.04-.15-.46-.228-.948-.228-1.45 0-3.328 3.012-6.024 6.726-6.024.162 0 .323.006.482.016-.484-3.623-3.865-6.238-7.701-6.238zm10.752 6.726c-3.235 0-5.858 2.355-5.858 5.26 0 1.574.773 2.986 2.014 4.0l-.519 1.554 1.8-1.282a6.23 6.23 0 002.563.548c3.235 0 5.858-2.355 5.858-5.26s-2.623-5.26-5.858-5.26z"/></svg>} 
              />
              <ContentItem 
                label="Telegram" 
                colorClass="bg-[#0088cc]" 
                isCustom 
                svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>} 
              />
              <ContentItem 
                label="Signal" 
                colorClass="bg-[#3a76f0]" 
                isCustom 
                svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12c0 2.21.72 4.25 1.94 5.89l-1.54 4.54 4.7-.93C8.61 22.37 10.24 23 12 23c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.47 0-2.84-.42-4.01-1.15l-.29-.18-2.5.5.52-1.53-.21-.32C4.66 16.14 4 14.15 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/></svg>} 
              />
            </>
          )}

          <div className="w-full">
            <button 
              onClick={() => setShowAllContactInfo(!showAllContactInfo)}
              className="flex items-center gap-1 text-[10px] font-bold text-slate-400 px-3 py-2 hover:text-slate-600 transition-colors"
            >
              {showAllContactInfo ? (
                <>Show less <ChevronUp className="h-3 w-3" /></>
              ) : (
                <>Show more <ChevronDown className="h-3 w-3" /></>
              )}
            </button>
          </div>
        </div>

        <div className="text-[10px] font-bold text-muted-foreground tracking-wider px-4 uppercase mt-8 mb-3">About & CTA</div>
        <div className="grid grid-cols-4 gap-2 px-1">
          <ContentItem icon={User} label="About Me" colorClass="bg-slate-800" />
          <ContentItem icon={Heading} label="Custom Title" colorClass="bg-slate-600" isPremium />
          <ContentItem icon={Zap} label="Call-to-Action" colorClass="bg-amber-500" isPremium />
          <ContentItem icon={Megaphone} label="Direct Ads" colorClass="bg-red-600" isPremium />
        </div>

        <div className="text-[10px] font-bold text-muted-foreground tracking-wider px-4 uppercase mt-8 mb-3">Social Links</div>
        <div className="grid grid-cols-4 gap-2 px-1">
          <ContentItem icon={Linkedin} label="LinkedIn" colorClass="bg-blue-700" />
          <ContentItem icon={Instagram} label="Instagram" colorClass="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" />
          <ContentItem 
            label="X" 
            colorClass="bg-black" 
            isCustom 
            svg={<svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>} 
          />

          {showAllSocialLinks && (
            <>
              <ContentItem icon={Facebook} label="Facebook" colorClass="bg-[#1877F2]" />
              <ContentItem icon={Youtube} label="YouTube" colorClass="bg-[#FF0000]" />
              <ContentItem 
                label="TikTok" 
                colorClass="bg-black" 
                isCustom 
                svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12.525.02c1.31 0 2.57.51 3.51 1.44.5.5.89 1.1 1.16 1.76.27.66.41 1.36.41 2.06 0 .44-.06.87-.17 1.29-.11.42-.27.83-.49 1.21-.22.38-.5.73-.83 1.03-.33.3-.71.55-1.12.74v.01c0 .01.01.01.01.02l.02.04"/></svg>} 
              />
              <ContentItem 
                label="Pinterest" 
                colorClass="bg-[#E60023]" 
                isCustom 
                svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.621 0 11.983-5.367 11.983-11.987S18.638 0 12.017 0z"/></svg>} 
              />
              <ContentItem icon={Youtube} label="Vimeo" colorClass="bg-[#1AB7EA]" />
              <ContentItem icon={Sparkles} label="Snapchat" colorClass="bg-[#FFFC00]" isCustom svg={<svg viewBox="0 0 24 24" className="h-6 w-6"><path d="M12 2.2c1.3 0 2.5.3 3.6.8.8.4 1.5.9 2.1 1.6s1.1 1.4 1.4 2.3c.3.9.4 1.8.4 2.8 0 1-.2 1.9-.6 2.8-.2.5-.5 1-.9 1.4l-.1.1c.4.2.8.4 1.1.7s.6.6.8.9.3.7.3 1.1c0 .4-.1.8-.3 1.1-.2.3-.5.6-.8.8-.4.2-.8.4-1.3.5.1.2.2.4.2.6 0 .4-.1.8-.3 1.1-.2.3-.5.5-.9.7-.5.2-1 .3-1.6.3-.5 0-1-.1-1.4-.3-.4-.2-.7-.5-.9-.9-.1.2-.3.4-.6.6-.3.2-.6.3-1 .3s-.7-.1-1-.3c-.3-.2-.5-.4-.6-.6-.2.4-.5.7-.9.9-.4.2-.9.3-1.4.3-.6 0-1.1-.1-1.6-.3-.4-.2-.7-.4-.9-.7-.2-.3-.3-.7-.3-1.1 0-.2.1-.4.2-.6-.5-.1-.9-.3-1.3-.5-.3-.2-.6-.5-.8-.8-.2-.3-.3-.7-.3-1.1 0-.4.1-.8.3-1.1.2-.3.5-.6.8-.9.3-.3.7-.5 1.1-.7l-.1-.1c-.4-.4-.7-.9-.9-1.4-.4-.9-.6-1.8-.6-2.8 0-1 .1-1.9.4-2.8.3-.9.8-1.7 1.4-2.3s1.3-1.2 2.1-1.6c1.1-.5 2.3-.8 3.6-.8z" fill="#000"/></svg>} />
              <ContentItem icon={Twitch} label="Twitch" colorClass="bg-[#9146FF]" />
            </>
          )}

          <div className="w-full">
            <button 
              onClick={() => setShowAllSocialLinks(!showAllSocialLinks)}
              className="flex items-center gap-1 text-[10px] font-bold text-slate-400 px-3 py-2 hover:text-slate-600 transition-colors"
            >
              {showAllSocialLinks ? (
                <>Show less <ChevronUp className="h-3 w-3" /></>
              ) : (
                <>Show more <ChevronDown className="h-3 w-3" /></>
              )}
            </button>
          </div>
        </div>

        <div className="text-[10px] font-bold text-muted-foreground tracking-wider px-4 uppercase mt-8 mb-3">Rich Content</div>
        <div className="grid grid-cols-4 gap-2 px-1">
          <ContentItem icon={Minus} label="Divider" colorClass="bg-slate-100 text-slate-900" />
          <ContentItem icon={FileText} label="Document" colorClass="bg-slate-100 text-slate-900" isPremium />
          <ContentItem icon={ImageIcon} label="Photos" colorClass="bg-slate-100 text-slate-900" isPremium />
        </div>

        <div className="text-[10px] font-bold text-muted-foreground tracking-wider px-4 uppercase mt-8 mb-3">Productivity Links</div>
        <div className="grid grid-cols-4 gap-2 px-1">
          <ContentItem label="Calendly" colorClass="bg-white border text-[#006BFF]" isCustom svg={<Calendar className="h-5 w-5" />} />
          <ContentItem label="Notion" colorClass="bg-white border text-black" isCustom svg={<FileText className="h-5 w-5" />} />
          <ContentItem label="Google Drive" colorClass="bg-white border" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5"><path d="M7.74 3.522l-.005 4.194 5.253 9.098 1.956-3.387-5.253-9.098-1.951.193z" fill="#0066da"/><path d="M19.255 13.522l-1.956 3.387 5.253 9.098 1.956-3.387-5.253-9.098z" fill="#00ac47"/><path d="M13.255 22.522l-1.956 3.387-10.505.001 1.956-3.387 10.505-.001z" fill="#ffba00"/><path d="M13.255 13.522l5.253 9.098-10.505.001-5.253-9.098 10.505-.001z" fill="#ea4335"/></svg>} />
          <ContentItem label="Google Calendar" colorClass="bg-white border" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" fill="#4285F4"/><path d="M5 4h14v4H5z" fill="#34A853"/><path d="M7 12h4v4H7z" fill="#EA4335"/><path d="M13 12h4v4h-4z" fill="#FBBC05"/></svg>} />
          
          {showAllProductivityLinks && (
            <>
              <ContentItem label="Yelp" colorClass="bg-[#FF1A1A]" isCustom svg={<StarIcon className="h-5 w-5" />} />
              <ContentItem label="Google Reviews" colorClass="bg-white text-slate-900 border" isCustom svg={<StarIcon className="h-5 w-5 text-yellow-400" />} />
              <ContentItem label="Etsy" colorClass="bg-[#F1641E]" isCustom svg={<ShoppingBagIcon className="h-5 w-5" />} />
              <ContentItem label="Booksy" colorClass="bg-[#00D7D7]" isCustom svg={<Calendar className="h-5 w-5" />} />
            </>
          )}

          <div className="w-full">
            <button 
              onClick={() => setShowAllProductivityLinks(!showAllProductivityLinks)}
              className="flex items-center gap-1 text-[10px] font-bold text-slate-400 px-3 py-2 hover:text-slate-600 transition-colors"
            >
              {showAllProductivityLinks ? (
                <>Show less <ChevronUp className="h-3 w-3" /></>
              ) : (
                <>Show more <ChevronDown className="h-3 w-3" /></>
              )}
            </button>
          </div>
        </div>

        <div className="text-[10px] font-bold text-muted-foreground tracking-wider px-4 uppercase mt-8 mb-3">Payment Links</div>
        <div className="grid grid-cols-4 gap-2 px-1">
          <ContentItem label="Venmo" colorClass="bg-[#3d95ce]" isCustom svg={<div className="font-bold text-xl italic">V</div>} />
          <ContentItem label="CashApp" colorClass="bg-[#00d64b]" icon={DollarSign} />
          <ContentItem label="Zelle" colorClass="bg-[#6b1dfc]" isCustom svg={<div className="font-bold text-xl italic">Z</div>} />
          
          {showAllPaymentLinks && (
            <ContentItem 
              label="PayPal" 
              colorClass="bg-[#003087]" 
              isCustom 
              svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M7.076 21.337l2.503-15.753c.12-.756.764-1.324 1.53-1.324h6.052c1.47 0 2.59.39 3.25 1.13.63.7 1.02 1.8 1.02 3.1 0 1.9-.9 3.6-2.5 4.8-1.4 1.1-3.2 1.6-5.3 1.6h-1.6l-1.1 6.447H7.076z"/></svg>} 
            />
          )}

          <div className="w-full">
            <button 
              onClick={() => setShowAllPaymentLinks(!showAllPaymentLinks)}
              className="flex items-center gap-1 text-[10px] font-bold text-slate-400 px-3 py-2 hover:text-slate-600 transition-colors"
            >
              {showAllPaymentLinks ? (
                <>Show less <ChevronUp className="h-3 w-3" /></>
              ) : (
                <>Show more <ChevronDown className="h-3 w-3" /></>
              )}
            </button>
          </div>
        </div>

        <div className="text-[10px] font-bold text-muted-foreground tracking-wider px-4 uppercase mt-8 mb-3">Music Links</div>
        <div className="grid grid-cols-4 gap-2 px-1">
          <ContentItem label="Spotify" colorClass="bg-[#1ed760]" isCustom svg={<Music className="h-5 w-5" />} />
          <ContentItem label="SoundCloud" colorClass="bg-[#ff5500]" isCustom svg={<Music className="h-5 w-5" />} />
          <ContentItem label="Apple Music" colorClass="bg-[#fa243c]" isCustom svg={<Music className="h-5 w-5" />} />
          
          {showAllMusicLinks && (
            <>
              <ContentItem label="iTunes" colorClass="bg-gradient-to-tr from-pink-500 to-purple-500" isCustom svg={<Music className="h-5 w-5" />} />
              <ContentItem label="Tidal" colorClass="bg-black" isCustom svg={<div className="font-bold">T</div>} />
              <ContentItem label="Bandcamp" colorClass="bg-[#629aa9]" isCustom svg={<div className="font-bold">B</div>} />
            </>
          )}

          <div className="w-full">
            <button 
              onClick={() => setShowAllMusicLinks(!showAllMusicLinks)}
              className="flex items-center gap-1 text-[10px] font-bold text-slate-400 px-3 py-2 hover:text-slate-600 transition-colors"
            >
              {showAllMusicLinks ? (
                <>Show less <ChevronUp className="h-3 w-3" /></>
              ) : (
                <>Show more <ChevronDown className="h-3 w-3" /></>
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

function StarIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ShoppingBagIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
      {...props}
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
