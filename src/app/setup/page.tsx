'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Plus, 
  Upload, 
  Pencil, 
  Sparkles, 
  Eye, 
  Link2,
  Code,
  Check,
  Search,
  Phone,
  Mail,
  Globe,
  ChevronDown,
  ChevronUp,
  FileText,
  Type,
  Minus,
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
  GripVertical,
  ShoppingBag,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  DollarSign,
  MessageSquare,
  Youtube,
  Twitch,
  Share2,
  Download,
  Save,
  LayoutGrid,
  Trash2,
  Lock,
  Smartphone,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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

function ImageEditDialog({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent aria-describedby={undefined} 
        side="bottom" 
        className="mx-auto w-full max-w-[500px] p-0 border-none bg-[#f8f9fb] rounded-t-[30px] overflow-hidden shadow-2xl [&>button]:hidden transition-all duration-700 ease-in-out"
      >
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <DialogPrimitive.Title asChild><h2 className="text-2xl font-black text-slate-900 tracking-tight">Images</h2></DialogPrimitive.Title>
            <button 
              onClick={() => onOpenChange(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-slate-100 transition-colors shadow-sm"
            >
              <XIcon className="w-4 h-4 text-slate-600" />
            </button>
          </div>

          <div className="space-y-4 pb-8">
            <div className="bg-white rounded-[24px] p-6 shadow-sm space-y-5">
              <span className="text-[13px] font-black text-slate-900 block px-1">Profile Image</span>
              <Button className="w-full h-12 bg-amber-400 hover:bg-amber-500 text-white font-black rounded-xl shadow-md border-none flex items-center justify-center gap-2 group transition-transform active:scale-95">
                <Upload className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" /> Upload
              </Button>
            </div>

            <div className="bg-white rounded-[24px] p-6 shadow-sm space-y-5">
              <div className="flex items-center justify-between px-1">
                <span className="text-[13px] font-black text-slate-900">Banner Image</span>
                <div className="w-20 h-10 relative rounded-lg overflow-hidden border-2 border-slate-50 shadow-inner">
                  <Image 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=200"
                    alt="Banner preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <Button className="flex-1 h-12 bg-amber-400 hover:bg-amber-500 text-white font-black rounded-xl shadow-md border-none flex items-center justify-center gap-2 group transition-transform active:scale-95">
                  <Pencil className="h-4 w-4 group-hover:rotate-12 transition-transform" /> Edit
                </Button>
                <Button variant="outline" className="flex-1 h-12 border-slate-100 bg-slate-50/50 text-slate-900 font-black rounded-xl hover:bg-slate-100 flex items-center justify-center gap-2 transition-transform active:scale-95">
                  <Trash2 className="h-4 w-4" /> Remove
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-6 shadow-sm space-y-5">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] font-black text-slate-900">Profile Logo</span>
                  <Lock className="h-3 w-3 text-slate-300" />
                </div>
                <div className="flex items-center gap-1 text-indigo-500 text-[10px] font-black uppercase tracking-wider">
                  <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center">
                    <Plus className="h-3 w-3 text-indigo-500 stroke-[3px]" />
                  </div>
                  Plus
                </div>
              </div>
              <Button className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-xl shadow-lg shadow-indigo-100 border-none transition-transform active:scale-95">
                Upgrade to add logo
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function AccessoriesDialog({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent aria-describedby={undefined} 
        side="bottom" 
        className="mx-auto w-full max-w-[500px] p-0 border-none bg-white rounded-t-[30px] overflow-hidden shadow-2xl [&>button]:hidden transition-all duration-500 ease-in-out"
      >
        <div className="p-8 space-y-8">
          <div className="flex items-center justify-between">
            <DialogPrimitive.Title asChild>
              <div className="flex items-baseline text-2xl tracking-tighter">
                <span className="font-black text-slate-900">solo.</span>
                <span className="font-bold text-white" style={{ WebkitTextStroke: '1px #cbd5e1' }}>accessories</span>
              </div>
            </DialogPrimitive.Title>
            <button 
              onClick={() => onOpenChange(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <XIcon className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-5 bg-white border border-slate-100 rounded-[20px] shadow-sm hover:border-indigo-100 hover:bg-indigo-50/30 transition-all group text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <div className="relative">
                    <Smartphone className="h-5 w-5" />
                    <Smartphone className="h-5 w-5 absolute -top-1 -right-1 opacity-40" />
                  </div>
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-black text-slate-900">Activate New accessories</p>
                  <p className="text-xs font-bold text-slate-400">Start the activation tutorial</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-indigo-400 transition-colors" />
            </button>

            <button className="w-full flex items-center justify-between p-5 bg-white border border-slate-100 rounded-[20px] shadow-sm hover:border-emerald-100 hover:bg-emerald-50/30 transition-all group text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-black text-slate-900">Purchase Accessories</p>
                  <p className="text-xs font-bold text-slate-400">
                    <span className="text-slate-900">Save 10%</span> on your first accessories
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-emerald-400 transition-colors" />
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function SetupPage() {
  const router = useRouter();
  const [setupTab, setSetupTab] = useState<'all' | 'profile' | 'bio' | 'content'>('all');
  const [visibility, setVisibility] = useState<'private' | 'public'>('private');
  const [selectedTheme, setSelectedTheme] = useState<'bright' | 'dim' | 'dark'>('bright');
  const [selectedColor, setSelectedColor] = useState('purple');
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [isAddingContent, setIsAddingContent] = useState(false);
  const [activeContentDetail, setActiveContentDetail] = useState<string | null>(null);
  const [showTitleField, setShowTitleField] = useState(false);
  const [showCountrySelector, setShowCountrySelector] = useState(false);
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);
  const [showImageEditDialog, setShowImageEditDialog] = useState(false);
  const [showAccessoriesDialog, setShowAccessoriesDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [textContent, setTextContent] = useState('');
  const [showAllContactInfo, setShowAllContactInfo] = useState(false);
  const [showAllSocialLinks, setShowAllSocialLinks] = useState(false);
  
  const [bioData, setBioData] = useState({
    firstName: 'rob',
    lastName: 'buc',
    companySlogan: 'a me too tiks a kicks oiuwhd h w',
    jobTitle: 'CEO',
    company: 'Abc Inc',
    department: 'Executive',
    address: '123 Main St.',
    city: 'Miami',
    state: 'FL',
    zip: '33101',
    country: 'United States',
    education: 'UTECH, JA',
    accreditations: 'Certified Design Professional'
  });

  const [profileContent, setProfileContent] = useState([
    { id: '1', icon: Facebook, label: "Facebook", value: "facebook.com/profile.php?id=61579757766527", colorClass: "bg-indigo-500" },
    { id: '2', icon: Globe, label: "website", value: "ibm.com", colorClass: "bg-indigo-400" },
    { id: '3', icon: Mail, label: "email", value: "ameyuo@gmail.com", colorClass: "bg-indigo-400" },
    { id: '4', icon: Phone, label: "phone", value: "+1 (786) 788-6983", colorClass: "bg-indigo-500" },
    { id: '5', icon: Phone, label: "office", value: "+1 (301) 433-4422", colorClass: "bg-indigo-400" },
  ]);

  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);

  const mapImage = PlaceHolderImages.find(p => p.id === 'map-header');
  const avatarImage = PlaceHolderImages.find(p => p.id === 'rob-buc-avatar');

  //defined costs
  const colors = [
    { name: 'red', class: 'bg-red-500' },
    { name: 'orange', class: 'bg-orange-400' },
    { name: 'green', class: 'bg-green-400' },
    { name: 'mint', class: 'bg-emerald-400' },
    { name: 'blue', class: 'bg-blue-400' },
    { name: 'purple', class: 'bg-indigo-500' },
    { name: 'black', class: 'bg-slate-900' },
  ];

  const handleBioChange = (field: string, value: string) => {
    setBioData(prev => ({ ...prev, [field]: value }));
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedItemIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (draggedItemIndex === null || draggedItemIndex === targetIndex) return;

    const newList = [...profileContent];
    const draggedItem = newList[draggedItemIndex];
    newList.splice(draggedItemIndex, 1);
    newList.splice(targetIndex, 0, draggedItem);

    setProfileContent(newList);
    setDraggedItemIndex(null);
  };

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

  const BioFieldEdit = ({ label, fieldKey, placeholder }: { label: string, fieldKey: keyof typeof bioData, placeholder: string }) => (
    <div className="space-y-1.5 mb-4 w-full">
      <Label className="text-xs font-bold text-slate-900">{label}</Label>
      <Input
        value={bioData[fieldKey] as string}
        onChange={(e) => handleBioChange(fieldKey, e.target.value)}
        placeholder={placeholder}
        className="h-10 border-slate-200 focus-visible:ring-slate-900 px-3 bg-white rounded-xl"
      />
    </div>
  );

  const BioFieldRead = ({ label, value }: { label: string, value: string }) => (
    <div className="space-y-1 py-3 border-b border-slate-50 last:border-0">
      <Label className="text-[11px] font-black text-slate-900 uppercase tracking-tighter">{label}</Label>
      <div className={cn("text-xs font-bold", value ? "text-slate-500" : "text-slate-300")}>
        {value || label}
      </div>
    </div>
  );

  const ContentItem = ({ icon: Icon, label, colorClass, isCustom = false, svg, isPremium = false }: { icon?: any, label: string, colorClass: string, isCustom?: boolean, svg?: React.ReactNode, isPremium?: boolean }) => (
    <div 
      className="flex items-center justify-between p-3 bg-white rounded-[20px] border shadow-sm mb-2 cursor-pointer hover:bg-slate-50 transition-colors"
      onClick={() => {
        setActiveContentDetail(label);
        setShowTitleField(false);
        setTextContent('');
      }}
    >
      <div className="flex items-center gap-3">
        <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center text-white", colorClass)}>
          {isCustom ? svg : <Icon className="h-5 w-5" />}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-bold text-slate-900">{label}</span>
          {isPremium && (
            <Crown className="h-3.5 w-3.5 text-amber-500 fill-amber-500/10" />
          )}
        </div>
      </div>
      <Button variant="ghost" size="sm" className="h-8 text-xs font-bold text-slate-900 hover:bg-slate-50 rounded-full px-4 transition-transform active:scale-95">
        <Plus className="h-3 w-3 mr-1" /> Add
      </Button>
    </div>
  );

  const ProfileContentRow = ({ icon: Icon, label, value, colorClass, onDragStart, onDragOver, onDrop, index }: { icon: any, label: string, value: string, colorClass: string, onDragStart: (e: React.DragEvent) => void, onDragOver: (e: React.DragEvent) => void, onDrop: (e: React.DragEvent) => void, index: number }) => (
    <div 
      className="flex items-center gap-3 p-3 bg-white rounded-[20px] border shadow-sm mb-2 group transition-all"
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div 
        className="text-slate-300 cursor-grab active:cursor-grabbing p-1 hover:text-slate-500 transition-colors"
        draggable
        onDragStart={onDragStart}
      >
        <GripVertical className="h-4 w-4" />
      </div>
      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0", colorClass)}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-black text-slate-900">{label}</p>
        <p className="text-[10px] font-bold text-slate-400 truncate">{value}</p>
      </div>
      <button className="text-slate-300 hover:text-slate-900 transition-colors p-1">
        <Pencil className="h-3.5 w-3.5" />
      </button>
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

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 p-4 bg-white border rounded-[20px] shadow-sm">
                      <Label className="text-xs font-bold text-slate-900">Zip</Label>
                      <Input placeholder="Zip Code" className="h-11 rounded-xl border-slate-200 bg-white" />
                    </div>
                    <div className="space-y-2 p-4 bg-white border rounded-[20px] shadow-sm">
                      <Label className="text-xs font-bold text-slate-900">Country</Label>
                      <Input placeholder="Country" className="h-11 rounded-xl border-slate-200 bg-white" />
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

  if (isAddingContent) {
    return (
      <div className="flex flex-col min-h-screen bg-[#f8f9fb] text-foreground pb-8">
        <header className="sticky top-0 z-10 bg-white border-b h-14 flex items-center px-4">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 transition-transform active:scale-95" onClick={() => setIsAddingContent(false)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="flex-1 text-center font-bold text-lg mr-10">Add Content</h1>
        </header>

        <main className="p-4 pb-24">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search content types" 
              className="pl-11 h-12 bg-white border-none shadow-sm rounded-xl focus-visible:ring-slate-200"
            />
          </div>

          <div className="text-[10px] font-bold text-muted-foreground tracking-wider px-4 uppercase mt-6 mb-2">Recommended Content</div>
          <div className="space-y-1">
            <ContentItem icon={Phone} label="Phone" colorClass="bg-green-500" />
            <ContentItem icon={Globe} label="Website" colorClass="bg-blue-600" />
            <ContentItem icon={Mail} label="Email" colorClass="bg-blue-400" />
            <ContentItem icon={MapPin} label="Location" colorClass="bg-red-500" />
            <ContentItem icon={Linkedin} label="LinkedIn" colorClass="bg-blue-700" />
            <ContentItem icon={Instagram} label="Instagram" colorClass="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" />
          </div>

          <div className="text-[10px] font-bold text-muted-foreground tracking-wider px-4 uppercase mt-6 mb-2">Contact Info</div>
          <div className="space-y-1">
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
                  svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 11.721 11.721 0 00-.617-1.25.077.077 0 00-.079-.037 19.736 19.736 0 00-4.885 1.515.069.069 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.862-1.297 1.199-1.99a.076.076 0 00-.041-.105 13.027 13.027 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.094.252-.192.372-.29a.074.074 0 01.077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 01.077.01c.12.098.246.196.373.29a.077.077 0 01-.006.127 12.299 12.299 0 01-1.874.894.077.077 0 00-.041.107c.34.69.74 1.36 1.2 1.985a.076.076 0 00.082.028 19.829 19.829 0 006.054-3.03a.076.076 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"/></svg>} 
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

            <button 
              onClick={() => setShowAllContactInfo(!showAllContactInfo)}
              className="flex items-center gap-1 text-[10px] font-bold text-slate-400 px-4 py-2 hover:text-slate-600 transition-colors"
            >
              {showAllContactInfo ? (
                <>Show less <ChevronUp className="h-3 w-3" /></>
              ) : (
                <>Show more <ChevronDown className="h-3 w-3" /></>
              )}
            </button>
          </div>

          <div className="text-[10px] font-bold text-muted-foreground tracking-wider px-4 uppercase mt-6 mb-2">About</div>
          <div className="space-y-1">
            <ContentItem icon={User} label="About Me" colorClass="bg-slate-800" />
            <ContentItem icon={Heading} label="Custom Title" colorClass="bg-slate-600" isPremium />
          </div>

          <div className="text-[10px] font-bold text-muted-foreground tracking-wider px-4 uppercase mt-6 mb-2">CTA</div>
          <div className="space-y-1">
            <ContentItem icon={Zap} label="Call-to-Action" colorClass="bg-amber-500" isPremium />
            <ContentItem icon={Megaphone} label="Direct Ads" colorClass="bg-red-600" isPremium />
          </div>

          <div className="text-[10px] font-bold text-muted-foreground tracking-wider px-4 uppercase mt-6 mb-2">Social Links</div>
          <div className="space-y-1">
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
                <ContentItem 
                  label="Snapchat" 
                  colorClass="bg-[#FFFC00]" 
                  isCustom 
                  svg={<svg viewBox="0 0 24 24" className="h-6 w-6"><path d="M12 2.2c1.3 0 2.5.3 3.6.8.8.4 1.5.9 2.1 1.6s1.1 1.4 1.4 2.3c.3.9.4 1.8.4 2.8 0 1-.2 1.9-.6 2.8-.2.5-.5 1-.9 1.4l-.1.1c.4.2.8.4 1.1.7s.6.6.8.9.3.7.3 1.1c0 .4-.1.8-.3 1.1-.2.3-.5.6-.8.8-.4.2-.8.4-1.3.5.1.2.2.4.2.6 0 .4-.1.8-.3 1.1-.2.3-.5.5-.9.7-.5.2-1 .3-1.6.3-.5 0-1-.1-1.4-.3-.4-.2-.7-.5-.9-.9-.1.2-.3.4-.6.6-.3.2-.6.3-1 .3s-.7-.1-1-.3c-.3-.2-.5-.4-.6-.6-.2.4-.5.7-.9.9-.4.2-.9.3-1.4.3-.6 0-1.1-.1-1.6-.3-.4-.2-.7-.4-.9-.7-.2-.3-.3-.7-.3-1.1 0-.2.1-.4.2-.6-.5-.1-.9-.3-1.3-.5-.3-.2-.6-.5-.8-.8-.2-.3-.3-.7-.3-1.1 0-.4.1-.8.3-1.1.2-.3.5-.6.8-.9.3-.3.7-.5 1.1-.7l-.1-.1c-.4-.4-.7-.9-.9-1.4-.4-.9-.6-1.8-.6-2.8 0-1 .1-1.9.4-2.8.3-.9.8-1.7 1.4-2.3s1.3-1.2 2.1-1.6c1.1-.5 2.3-.8 3.6-.8z" fill="#000"/></svg>} 
                />
                <ContentItem icon={Twitch} label="Twitch" colorClass="bg-[#9146FF]" />
                <ContentItem 
                  label="Threads" 
                  colorClass="bg-black" 
                  isCustom 
                  svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12.554 4.884c-3.19 0-4.723 1.435-4.723 4.47 0 2.94 1.532 4.441 4.723 4.441 3.205 0 4.738-1.501 4.738-4.441 0-3.035-1.533-4.47-4.738-4.47zm0 7.697c-2.316 0-3.415-1.041-3.415-3.227 0-2.185 1.099-3.256 3.415-3.256 2.33 0 3.43 1.071 3.43 3.256 0 2.186-1.1 3.227-3.43 3.227zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-4.762-.97c0-5.411-2.903-8.15-8.238-8.15-5.336 0-8.239 2.739-8.239 8.15 0 5.412 2.903 8.151 8.239 8.151 1.765 0 3.32-.303 4.613-.913l-.536-1.127c-1.164.55-2.52.825-4.077.825-4.48 0-6.907-2.302-6.907-6.936 0-4.634 2.427-6.936 6.907-6.936 4.48 0 6.907-2.302 6.907-6.936 0 1.25-.198 2.254-.593 3.012-.395.758-.962 1.137-1.7 1.137-.738 0-1.305-.379-1.7-1.137-.395-.758-.593-1.762-.593-3.012 0-3.035 1.533-4.47 4.738-4.47 3.205 0 4.738 1.435 4.738 4.47 0 1.25-.198 2.254-.593 3.012-.395.758-.962 1.137-1.7 1.137s-1.305-.379-1.7-1.137c-.395-.758-.593-1.762-.593-3.012V12z"/></svg>} 
                />
                <ContentItem 
                  label="Clubhouse" 
                  colorClass="bg-[#F2EFE8] text-slate-900" 
                  isCustom 
                  svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.75 4a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zm-3.5 0a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zm1.75 4.5c2.333 0 4.5 1.167 4.5 3.5v.5h-9v-.5c0-2.333 2.167-3.5 4.5-3.5z" /></svg>} 
                />
              </>
            )}

            <button 
              onClick={() => setShowAllSocialLinks(!showAllSocialLinks)}
              className="flex items-center gap-1 text-[10px] font-bold text-slate-400 px-4 py-2 hover:text-slate-600 transition-colors"
            >
              {showAllSocialLinks ? (
                <>Show less <ChevronUp className="h-3 w-3" /></>
              ) : (
                <>Show more <ChevronDown className="h-3 w-3" /></>
              )}
            </button>
          </div>

          <div className="text-[10px] font-bold text-muted-foreground tracking-wider px-4 uppercase mt-6 mb-2">Rich Content</div>
          <div className="space-y-1">
            <ContentItem icon={Minus} label="Divider" colorClass="bg-slate-100 text-slate-900" />
            <ContentItem icon={FileText} label="Document" colorClass="bg-slate-100 text-slate-900" isPremium />
            <ContentItem icon={Type} label="Text Block" colorClass="bg-slate-100 text-slate-900" />
            <ContentItem icon={ImageIcon} label="Photos" colorClass="bg-slate-100 text-slate-900" isPremium />
          </div>

          <div className="text-[10px] font-bold text-muted-foreground tracking-wider px-4 uppercase mt-6 mb-2">Productivity Links</div>
          <div className="space-y-1">
            <ContentItem label="Calendly" colorClass="bg-white border text-[#006BFF]" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm4.5-8.5c.276 0 .5.224.5.5s-.224.5-.5.5H12v4.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5V12c0-.276.224-.5.5-.5h4.5z"/></svg>} />
            <ContentItem label="Notion" colorClass="bg-white border text-black" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M4.459 4.208c.646.563.856.815.856 1.846v12.004c0 .89-.19 1.112-.894 1.112H4V20h4.929v-.83h-.51c-.703 0-.893-.222-.893-1.112v-9.52l5.73 9.471c.324.534.665.845 1.255.845h4.901v-.83h-.457c-.647 0-.856-.252-.856-1.282V5.132c0-.89.19-1.112.894-1.112h.457V3.19h-4.626v.83h.51c.703 0 .893.222.893 1.112v8.669l-5.064-8.669c-.324-.534-.665-.845-1.255-.845H4.459v1.031z"/></svg>} />
            <ContentItem label="Google Drive" colorClass="bg-white border" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5"><path d="M7.74 3.522l-.005 4.194 5.253 9.098 1.956-3.387-5.253-9.098-1.951.193z" fill="#0066da"/><path d="M19.255 13.522l-1.956 3.387 5.253 9.098 1.956-3.387-5.253-9.098z" fill="#00ac47"/><path d="M13.255 22.522l-1.956 3.387-10.505.001 1.956-3.387 10.505-.001z" fill="#ffba00"/><path d="M13.255 13.522l5.253 9.098-10.505.001-5.253-9.098 10.505-.001z" fill="#ea4335"/></svg>} />
            <ContentItem label="Google Calendar" colorClass="bg-white border" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" fill="#4285F4"/><path d="M5 4h14v4H5z" fill="#34A853"/><path d="M7 12h4v4H7z" fill="#EA4335"/><path d="M13 12h4v4h-4z" fill="#FBBC05"/></svg>} />
            
            {showAllProductivityLinks && (
              <>
                <ContentItem label="Yelp" colorClass="bg-[#FF1A1A]" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12.2 13.8V11L14.7 12.2V15L12.2 13.8M15.4 15.6L18 14.3V11.5L15.4 12.8V15.6M18.7 10.2L16.2 8.9V6.1L18.7 7.4V10.2M20.3 6.3V3.5L17.8 4.8V7.6L20.3 6.3M23.5 4.6L21 3.3V0.5L23.5 1.8V4.6M11.6 8.3L9.1 7V4.2L11.6 5.5V8.3M8.4 6.5L5.8 5.2V2.4L8.4 3.7V6.5M5.1 4.7V1.9L2.6 3.2V6L5.1 4.7M1.9 2.8L0 1.9V4.7L1.9 5.6V2.8M13.2 14.5L10.7 13.2V16L13.2 17.3V14.5M10.1 12.7L7.5 11.4V14.2L10.1 15.5V12.7M6.9 10.9V8.1L4.4 9.4V12.2L6.9 10.9M3.7 9L1.8 8.1V10.9L3.7 11.8V9M12.1 23.5L14.6 22.2V19.4L12.1 20.7V23.5Z"/></svg>} />
                <ContentItem label="Google Reviews" colorClass="bg-white text-slate-900 border" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/></svg>} />
                <ContentItem label="Etsy" colorClass="bg-[#F1641E]" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M19.1 0h-14.2c-2.7 0-4.9 2.2-4.9 4.9v14.2c0 2.7 2.2 4.9 4.9 4.9h14.2c2.7 0 4.9-2.2 4.9-4.9v-14.2c0-2.7-2.2-4.9-4.9-4.9zm-4.7 18.2c-1.1 0-2.1-.2-3-.7s-1.6-1.1-2.1-2c-.5-.8-.7-1.7-.7-2.7 0-1.2.3-2.3.8-3.2.5-.9 1.3-1.6 2.2-2.1.9-.5 2-.8 3.2-.8.8 0 1.5.1 2.2.3s1.2.5 1.7.9l-1.3 2c-.3-.2-.6-.4-1-.5-.4-.1-.8-.2-1.2-.2-.7 0-1.3.1-1.8.4-.5.3-.9.7-1.1 1.2-.3.5-.4 1.1-.4 1.8s.1 1.3.4 1.8c.3.5.6.9 1.1 1.2.5.3 1 .4 1.7.4.5 0 .9-.1 1.4-.2.5-.1.9-.3 1.4-.6l1.2 1.9c-.6.4-1.3.7-2.1.9-.8.2-1.7.3-2.7.3z"/></svg>} />
                <ContentItem label="Booksy" colorClass="bg-[#00D7D7]" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm3.8 14H8.2c-.11 0-.2-.09-.2-.2v-1.6c0-.11.09-.2.2-.2h.8V9h-.8c-.11 0-.2-.09-.2-.2V7.2c0-.11.09-.2.2-.2h7.6c.11 0 .2.09.2.2v1.6c0 .11-.09.2-.2.2h-.8v5h.8c.11 0 .2.09.2.2v1.6c0 .11-.09.2-.2.2z"/></svg>} />
                <ContentItem label="App Store" colorClass="bg-[#007AFF]" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.333 16.485c-.324.32-.693.475-1.096.475-.412 0-.766-.145-1.077-.442l-4.232-4.2c-.31-.314-.454-.69-.454-1.1 0-.41.155-.78.465-1.08l4.221-4.2c.3-.297.66-.442 1.077-.442.41 0 .77.155 1.07.453.303.304.453.664.453 1.08 0 .416-.145.766-.443 1.066l-3.144 3.123 3.144 3.123c.307.307.46.663.46 1.075 0 .403-.153.76-.46 1.069z"/></svg>} />
                <ContentItem label="Google Play" colorClass="bg-white text-slate-900 border" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.41-.814V2.628c0-.323.155-.615.409-.814z" fill="#EA4335"/><path d="M20.391 12l-3.792-3.792-3.107 3.107-1.3 1.3 4.407 4.407 3.792-3.792c.323-.323.323-.847 0-1.17z" fill="#FFBC00"/><path d="M3.61 22.186l12.989-12.989L13.792 12 3.61 22.186z" fill="#4285F4"/><path d="M3.609 1.814L16.598 14.803l2.2-2.2L3.609 1.814z" fill="#34A853"/></svg>} />
                <ContentItem label="Zillow" colorClass="bg-[#006AFF]" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17h-9l1.5-3h6l1.5 3zm-4.5-5l-3 6h6l-3-6z"/></svg>} />
                <ContentItem label="Medium" colorClass="bg-black" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M13.54 12a6.8 6.8 0 11-13.6 0 6.8 6.8 0 0113.6 0zM19 12c0 3.42-1.5 6.2-3.3 6.2s-3.3-2.78-3.3-6.2 1.5-6.2 3.3-6.2 3.3 2.78 3.3 6.2zm4.7 0c0 3-1.1 5.4-2.5 5.4s-2.5-2.4-2.5-5.4 1.1-5.4 2.5-5.4 2.5 2.4 2.5 5.4z"/></svg>} />
                <ContentItem label="Behance" colorClass="bg-black" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M22 13h-4v1h4v-1zm1.5-7.5c-3.1 0-5.5 1.3-6.4 3.9-.3.8-.5 1.6-.5 2.6s.2 1.8.5 2.6c.9 2.6 3.3 3.9 6.4 3.9 2.1 0 3.9-.6 5.3-1.8l-1.3-2.1c-1 .8-2.4 1.3-4 1.3-1.8 0-3.2-.8-3.7-2.3H32c0-.1 0-.2 0-.4 0-1-.2-1.8-.5-2.6-.9-2.6-3.3-3.9-6.4-3.9zm-2.8 5c.5-1.5 1.9-2.3 3.7-2.3s3.2.8 3.7 2.3h-7.4zM3.5 6.5v15h9.5c2.4 0 4.3-.6 5.7-1.8s2.1-2.9 2.1-5.1c0-2.2-.7-3.9-2.1-5.1-1.4-1.2-3.3-1.8-5.7-1.8H3.5zm4 3h5c.8 0 1.5.2 2 .6s.8 1 .8 1.8-.3 1.4-.8 1.8c-.5.4-1.2.6-2 .6h-5v-4.8zm0 7.8v-4.8h5.5c.8 0 1.5.2 2 .6s.8 1 .8 1.8-.3 1.4-.8 1.8c-.5.4-1.2.6-2 .6h-5.5v.1z"/></svg>} />
                <ContentItem label="Dribbble" colorClass="bg-[#EA4C89]" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-2.634-.815-5.315-.367.215.583.415 1.177.585 1.762 2.505-.16 4.593.745 4.73.805a9.92 9.92 0 000-2.2zm-1.127 4.25c-.035-.013-1.782-.635-4.155-.54-.15-.437-.315-.875-.49-1.31-2.215.535-4.22.42-4.37.41-.1.385-.205.772-.315 1.162 4.415 1.345 6.273 3.9 6.36 4.025a9.927 9.927 0 002.97-3.747zm-5.755 5.362c-.105-.15-1.83-2.618-6.1-4.04-.15.415-.31.83-.475 1.245a9.954 9.954 0 006.575 2.795zm-8.86-3.875c.175-.425.355-.855.545-1.287-2.7-.105-5.462.66-5.753.747a9.932 9.932 0 005.208 4.43c.1-.132 1.705-2.14 1.705-2.14zM1.4 12.06c.03-.023 2.723-.9 5.89-.608-.125-.308-.255-.615-.39-.92-3.32-.468-6.42.23-6.59.27A9.92 9.92 0 001.4 12.06zm.605-4.267c.05-.013 2.922-.725 6.13-.2.32-.693.682-1.373 1.077-2.03-2.673-1.463-5.06-1.147-5.26-1.118a9.92 9.92 0 00-1.947 3.348zm6.54-5.32c.155.025 2.378.435 4.88 2.083.408-.813.785-1.63 1.123-2.45A9.936 9.936 0 008.545 2.473zm7.04-1.353c-.35.842-.743 1.68-1.173 2.508 2.355.677 4.545.47 4.757.447a9.94 9.94 0 00-3.584-2.955z"/></svg>} 
                />
                <ContentItem label="GitHub" colorClass="bg-[#181717]" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>} />
              </>
            )}

            <button 
              onClick={() => setShowAllSocialLinks(!showAllSocialLinks)}
              className="flex items-center gap-1 text-[10px] font-bold text-slate-400 px-4 py-2 hover:text-slate-600 transition-colors"
            >
              {showAllSocialLinks ? (
                <>Show less <ChevronUp className="h-3 w-3" /></>
              ) : (
                <>Show more <ChevronDown className="h-3 w-3" /></>
              )}
            </button>
          </div>

          <div className="text-[10px] font-bold text-muted-foreground tracking-wider px-4 uppercase mt-6 mb-2">Payment Links</div>
          <div className="space-y-1">
            <ContentItem label="Venmo" colorClass="bg-[#3d95ce]" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M21.164 1.5c-2.88 0-4.814 1.258-5.833 3.774L11.5 15.11 7.669 5.274c-.544-1.396-1.631-2.274-3.131-2.274-2.175 0-3.538 1.538-3.538 3.5 0 .544.1.918.238 1.258l7.669 19.742h3.538l8.481-20.914c.408-.988.816-1.5 1.5-1.5.544 0 .918.17.918.68s-.204 1.054-.476 1.7L18.47 18.274c-.646 1.496-1.258 2.618-2.312 3.842l2.312 2.382c2.04-1.97 3.538-4.25 4.796-7.38L24.538 5.7c.442-1.054.918-1.7.918-2.38 0-1.122-.85-1.82-2.212-1.82h-2.08z"/></svg>} />
            <ContentItem label="CashApp" colorClass="bg-[#00d64b]" icon={DollarSign} />
            <ContentItem label="Zelle" colorClass="bg-[#6b1dfc]" isCustom svg={<svg viewBox="0 0 24 24" className="h-6 w-6 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 10c0 .3-.1.5-.2.7l-4.2 4.2c-.2.2-.4.3-.7.3s-.5-.1-.7-.3l-4.2-4.2c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7l4.2-4.2c.2-.2.4-.3.7-.3s.5.1.7.3l4.2 4.2c.2.2.3.4.3.7z"/></svg>} />
            <button className="flex items-center gap-1 text-[10px] font-bold text-slate-400 px-4 py-2 hover:text-slate-600 transition-colors">
              Show more <ChevronDown className="h-3 w-3" />
            </button>
          </div>

          <div className="text-[10px] font-bold text-muted-foreground tracking-wider px-4 uppercase mt-6 mb-2">Music Links</div>
          <div className="space-y-1">
            <ContentItem label="Spotify" colorClass="bg-[#1ed760]" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.486 14.424c-.18.295-.563.387-.857.207-2.35-1.435-5.309-1.759-8.794-.963-.335.077-.67-.133-.746-.47-.077-.334.132-.67.47-.745 3.815-.873 7.087-.497 9.721 1.112.294.18.386.564.206.859zm1.225-2.719c-.227.367-.707.487-1.074.26-2.69-1.654-6.79-2.134-9.97-1.17-.413.127-.85-.106-.977-.52-.126-.413.107-.85.52-.977 3.636-1.103 8.163-.564 11.24 1.33.367.227.487.707.26 1.074zm.106-2.828c-3.66-2.174-9.688-2.374-13.155-1.32-.563.17-1.164-.153-1.335-.716-.17-.563.153-1.164.716-1.335 4.004-1.215 10.653-1.01 14.832 1.47.51.3.674.957.373 1.467-.3.51-.957.674-1.467.373z"/></svg>} />
            <ContentItem label="SoundCloud" colorClass="bg-[#ff5500]" isCustom svg={<svg viewBox="0 0 24 24" className="h-6 w-6 fill-current"><path d="M11.56 8.35c.18 0 .33.15.33.33v6.64c0 .18-.15.33-.33.33s-.33-.15-.33-.33V8.68c0-.18.15-.33.33-.33zm-1.87 1c.18 0 .33.15.33.33v5.64c0 .18-.15.33-.33.33s-.33-.15-.33-.33v-5.64c0-.18.15-.33.33-.33zm-1.87.5c.18 0 .33.15.33.33v4.64c0 .18-.15.33-.33.33s-.33-.15-.33-.33V9.85c0-.18.15-.33.33-.33zm-1.87.5c.18 0 .33.15.33.33v3.64c0 .18-.15.33-.33.33s-.33-.15-.33-.33v-3.64c0-.18.15-.33.33-.33zm-1.87.5c.18 0 .33.15.33.33v2.64c0 .18-.15.33-.33.33s-.33-.15-.33-.33v-2.64c0-.18.15-.33.33-.33zm-1.87.5c.18 0 .33.15.33.33v1.64c0 .18-.15.33-.33.33s-.33-.15-.33-.33v-1.64c0-.18.15-.33.33-.33zm11.24-5c.18 0 .33.15.33.33v11.64c0 .18-.15.33-.33.33s-.33-.15-.33-.33V4.68c0-.18.15-.33.33-.33zm1.87 1c.18 0 .33.15.33.33v10.64c0 .18-.15.33-.33.33s-.33-.15-.33-.33V5.68c0-.18.15-.33.33-.33z"/></svg>} />
            <ContentItem label="Apple Music" colorClass="bg-[#fa243c]" isCustom svg={<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>} />
            <button className="flex items-center gap-1 text-[10px] font-bold text-slate-400 px-4 py-2 hover:text-slate-600 transition-colors">
              Show more <ChevronDown className="h-3 w-3" />
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fb] text-foreground pb-24">
      <header className="sticky top-0 z-20 bg-white border-b h-14 flex items-center px-4">
        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 transition-transform active:scale-95" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="flex-1 text-center font-black text-lg mr-10">Setup</h1>
      </header>

      <main className="p-4 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between p-4 bg-white rounded-[20px] border shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-100 rounded-xl">
                <Link2 className="h-4 w-4 text-slate-600" />
              </div>
              <div className="text-sm font-black text-slate-900">solo.link</div>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-green-500 rounded-full" />
               <ArrowLeft className="h-4 w-4 text-slate-300 rotate-180" />
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-white rounded-[20px] border shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-100 rounded-xl">
                <Code className="h-4 w-4 text-slate-600" />
              </div>
              <div className="text-sm font-black text-slate-900">solo.code</div>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-green-500 rounded-full" />
               <ArrowLeft className="h-4 w-4 text-slate-300 rotate-180" />
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-white rounded-[20px] border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-100 rounded-xl">
                <ShoppingBag className="h-4 w-4 text-slate-600" />
              </div>
              <div className="text-sm font-black text-slate-900">solo.accessories</div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 text-xs font-black text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full px-4 transition-transform active:scale-95"
              onClick={() => setShowAccessoriesDialog(true)}
            >
              <Plus className="h-3 w-3 mr-1" /> Add
            </Button>
          </div>
        </div>

        <div className="pt-2">
          <Tabs defaultValue="all" className="w-full" onValueChange={(val) => setSetupTab(val as any)}>
            <TabsList className="grid w-full grid-cols-3 bg-slate-100 h-auto p-1 rounded-full">
              <TabsTrigger 
                value="profile" 
                className="h-10 rounded-full data-[state=active]:bg-slate-900 data-[state=active]:text-white font-black text-[11px] uppercase tracking-wider"
              >
                Profile
              </TabsTrigger>
              <TabsTrigger 
                value="bio" 
                className="h-10 rounded-full data-[state=active]:bg-slate-900 data-[state=active]:text-white font-black text-[11px] uppercase tracking-wider"
              >
                Bio
              </TabsTrigger>
              <TabsTrigger 
                value="content" 
                className="h-10 rounded-full data-[state=active]:bg-slate-900 data-[state=active]:text-white font-black text-[11px] uppercase tracking-wider"
              >
                Content
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {(setupTab === 'all' || setupTab === 'profile') && (
          <div className="px-2 space-y-2">
            <div className="flex items-center gap-1">
              <Label className="text-sm font-black text-slate-900">Card Name</Label>
              <span className="text-destructive font-black text-sm">*</span>
            </div>
            <Input 
              defaultValue="sb-example-card"
              className="h-12 border-slate-200 focus-visible:ring-slate-900 px-3 bg-white rounded-xl shadow-sm"
            />
            <p className="text-[11px] font-bold text-slate-400">
              A unique identifier for your card&apos;s URL
            </p>
          </div>
        )}

        {(setupTab === 'all' || setupTab === 'profile') && (
          <div className="flex items-center justify-between px-2">
            <Button 
              variant="outline" 
              className="h-10 px-6 rounded-lg border-indigo-600 text-indigo-600 font-bold hover:bg-indigo-50 transition-colors"
            >
              Change Template
            </Button>
            <div className="text-[11px] font-bold text-slate-400">
              Modern <span className="text-indigo-400 mx-1">|</span> Standard
            </div>
          </div>
        )}

        {(setupTab === 'all' || setupTab === 'profile') && (
          <div className="relative mb-14">
            <div className="h-44 relative rounded-[30px] overflow-hidden border-2 border-indigo-500 shadow-sm bg-white">
              <Image 
                src={mapImage?.imageUrl || "https://picsum.photos/seed/map/600/300"}
                alt="Header"
                fill
                className="object-cover"
              />
              <Button 
                variant="outline" 
                size="sm" 
                className="absolute bottom-3 right-3 bg-white rounded-full h-10 px-5 text-xs font-black shadow-lg border-2 border-slate-100 z-20 transition-transform active:scale-95 text-slate-900"
                onClick={() => setShowImageEditDialog(true)}
              >
                <Pencil className="h-3.5 w-3.5 mr-2" /> Edit
              </Button>
            </div>
            
            <div className="absolute bottom-0 left-6 translate-y-[10%] z-10">
              <div className="w-28 h-28 rounded-full border-2 border-indigo-500 shadow-xl p-0.5 bg-white overflow-hidden relative">
                <div className="w-full h-full relative rounded-full overflow-hidden">
                  <Image 
                    src={avatarImage?.imageUrl || "https://picsum.photos/seed/rob/200/200"}
                    alt="Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {(setupTab === 'all' || setupTab === 'bio') && (
          <div className={cn("space-y-4", setupTab === 'all' ? "pt-2" : "pt-2")}>
            <div className="flex items-center justify-between px-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">BIO</span>
              {!isEditingBio && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 text-xs font-black rounded-full px-4 hover:bg-slate-100 transition-transform active:scale-95"
                  onClick={() => setIsEditingBio(true)}
                >
                  <Pencil className="h-3.5 w-3.5 mr-2" /> Edit
                </Button>
              )}
            </div>

            <Card className="rounded-[30px] shadow-sm border overflow-hidden p-8">
              {isEditingBio ? (
                <div className="space-y-0">
                  <div className="grid grid-cols-2 gap-4">
                    <BioFieldEdit label="First Name" fieldKey="firstName" placeholder="First name" />
                    <BioFieldEdit label="Last Name" fieldKey="lastName" placeholder="Last name" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <BioFieldEdit label="Job Title" fieldKey="jobTitle" placeholder="Job title" />
                    <BioFieldEdit label="Department" fieldKey="department" placeholder="Department" />
                  </div>
                  <BioFieldEdit label="Accreditations" fieldKey="accreditations" placeholder="Certifications or accreditations" />
                  <BioFieldEdit label="Education" fieldKey="education" placeholder="Education background" />
                  <BioFieldEdit label="Company" fieldKey="company" placeholder="Company name" />
                  <BioFieldEdit label="Company Slogan" fieldKey="companySlogan" placeholder="Company Slogan" />
                  
                  <div className="pt-4 space-y-4">
                    <Label className="text-xs font-black text-slate-900 uppercase tracking-tight">Location</Label>
                    <BioFieldEdit label="Address" fieldKey="address" placeholder="123 Main St" />
                    <div className="grid grid-cols-2 gap-4">
                      <BioFieldEdit label="City" fieldKey="city" placeholder="City" />
                      <BioFieldEdit label="State" fieldKey="state" placeholder="State" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <BioFieldEdit label="Zip" fieldKey="zip" placeholder="Zip code" />
                      <BioFieldEdit label="Country" fieldKey="country" placeholder="Country" />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-8">
                    <Button 
                      className="flex-1 h-12 rounded-[20px] bg-indigo-500 hover:bg-indigo-600 text-white font-black transition-transform active:scale-95"
                      onClick={() => setIsEditingBio(false)}
                    >
                      Save
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 h-12 rounded-[20px] border-slate-200 bg-white text-slate-900 font-black hover:bg-slate-50 transition-transform active:scale-95"
                      onClick={() => setIsEditingBio(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-1">
                  <BioFieldRead label="Full Name" value={`${bioData.firstName} ${bioData.lastName}`} />
                  <BioFieldRead label="Job Title" value={bioData.jobTitle} />
                  <BioFieldRead label="Department" value={bioData.department} />
                  <BioFieldRead label="Accreditations" value={bioData.accreditations} />
                  <BioFieldRead label="Education" value={bioData.education} />
                  <BioFieldRead label="Company" value={bioData.company} />
                  <BioFieldRead label="Company Slogan" value={bioData.companySlogan} />
                  <BioFieldRead label="Location" value={`${bioData.address}, ${bioData.city}, ${bioData.state} ${bioData.zip}, ${bioData.country}`} />
                </div>
              )}
            </Card>
          </div>
        )}

        {(setupTab === 'all' || setupTab === 'content') && (
          <div className="space-y-4 pt-2">
            <div className="px-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">PROFILE CONTENT</span>
            </div>
            
            <div className="space-y-2">
              {profileContent.map((item, index) => (
                <ProfileContentRow 
                  key={item.id}
                  index={index}
                  icon={item.icon} 
                  label={item.label} 
                  value={item.value} 
                  colorClass={item.colorClass}
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, index)}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              className="w-full h-14 rounded-full bg-white border-slate-200 text-sm font-black text-slate-900 shadow-sm mt-4 transition-transform active:scale-95"
              onClick={() => setIsAddingContent(true)}
            >
              <Plus className="h-4 w-4 mr-2" /> Add Content
            </Button>
          </div>
        )}

        {(setupTab === 'all' || setupTab === 'profile') && (
          <div className="space-y-3 pt-2">
            <div className="px-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">CARD VISIBILITY</span>
            </div>
            <Card className="rounded-[30px] shadow-sm border p-6">
              <div className="flex gap-3">
                <Button 
                  onClick={() => setVisibility('private')}
                  className={cn(
                    "h-10 px-6 font-bold rounded-lg transition-all",
                    visibility === 'private' ? "bg-indigo-600 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  )}
                >
                  Private
                </Button>
                <Button 
                  onClick={() => setVisibility('public')}
                  className={cn(
                    "h-10 px-6 font-bold rounded-lg transition-all",
                    visibility === 'public' ? "bg-indigo-600 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  )}
                >
                  Public
                </Button>
              </div>
              <p className="text-xs font-bold text-slate-400 mt-4 px-1 leading-relaxed">
                Only people with the direct link can view your card
              </p>
            </Card>
          </div>
        )}

        {(setupTab === 'all' || setupTab === 'profile') && (
          <div className="space-y-4 pt-2">
            <div className="px-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">STYLE</span>
            </div>
            
            <Card className="rounded-[30px] shadow-sm border p-8 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-slate-900">Color</span>
                  <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-[10px] font-black text-slate-900">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                    Purple
                  </div>
                </div>
                <div className="flex justify-between items-center px-2">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={cn(
                        "w-8 h-8 rounded-full border-2 transition-transform active:scale-90",
                        selectedColor === c.name ? "border-slate-900 scale-110 shadow-lg" : "border-transparent",
                        c.class
                      )}
                    />
                  ))}
                </div>
                <Button variant="outline" className="w-full h-12 rounded-full text-xs font-black border-slate-100 bg-white flex items-center justify-center gap-2 mt-4 transition-transform active:scale-95" onClick={() => setShowUpgradePopup(true)}>
                  <Sparkles className="h-4 w-4 text-indigo-500" />
                  Upgrade for Unlimited Colors
                </Button>
              </div>

              <div className="space-y-4">
                <span className="text-sm font-black text-slate-900">Theme</span>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'bright', label: 'Bright' },
                    { id: 'dim', label: 'Dim' },
                    { id: 'dark', label: 'Dark' },
                  ].map((t) => (
                    <Button
                      key={t.id}
                      variant={selectedTheme === t.id ? 'default' : 'outline'}
                      onClick={() => setSelectedTheme(t.id as any)}
                      className={cn(
                        "h-12 rounded-full text-xs font-black transition-transform active:scale-95",
                        selectedTheme === t.id ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-400 border-slate-100"
                      )}
                    >
                      <div className={cn("w-2 h-2 rounded-full mr-2", selectedTheme === t.id ? "bg-indigo-400" : "bg-slate-200")} />
                      {t.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-sm font-black text-slate-900">Icon Style</span>
                <div className="flex items-center gap-4 px-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[12px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <div className="w-10 h-10 rounded-[12px] bg-indigo-500 flex items-center justify-center text-white shadow-sm">
                      <Facebook className="h-5 w-5" />
                    </div>
                    <div className="w-10 h-10 rounded-[12px] border-2 border-indigo-200 flex items-center justify-center text-indigo-400 bg-white">
                      <Facebook className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1" />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[8px] bg-blue-400 flex items-center justify-center text-white shadow-sm">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12.525.02c1.31 0 2.57.51 3.51 1.44.5.5.89 1.1 1.16 1.76.27.66.41 1.36.41 2.06 0 .44-.06.87-.17 1.29-.11.42-.27.83-.49 1.21-.22.38-.5.73-.83 1.03-.33.3-.71.55-1.12.74v.01c0 .01.01.01.01.02l.02.04"/></svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white shadow-sm">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12.525.02c1.31 0 2.57.51 3.51 1.44.5.5.89 1.1 1.16 1.76.27.66.41 1.36.41 2.06 0 .44-.06.87-.17 1.29-.11.42-.27.83-.49 1.21-.22.38-.5.73-.83 1.03-.33.3-.71.55-1.12.74v.01c0 .01.01.01.01.02l.02.04"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {(setupTab === 'all' || setupTab === 'profile') && (
          <div className="space-y-4 pt-2">
            <div className="px-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">BRANDING</span>
            </div>
            <Card className="rounded-[30px] shadow-sm border p-6 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors" onClick={() => setShowUpgradePopup(true)}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-indigo-500" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-black text-slate-900 leading-tight">Upgrade to solo.Pro+</p>
                  <p className="text-[10px] font-bold text-slate-400 leading-tight max-w-[180px]">
                    Hide solo. branding from your solo.Pro and upload your logo.
                  </p>
                </div>
              </div>
              <ArrowLeft className="h-4 w-4 text-slate-300 rotate-180" />
            </Card>
          </div>
        )}
      </main>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] p-6 bg-white/90 backdrop-blur-md border-t z-30 rounded-t-[30px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <TooltipProvider>
          <div className="flex items-center gap-6">
            <div className="flex-1">
              <Button 
                onClick={() => router.push('/cards/edit-preview')}
                className="w-full h-14 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-100 flex items-center justify-center gap-3 transition-transform active:scale-95 px-4"
              >
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <Eye className="h-4 w-4" />
                </div>
                <span className="font-bold text-sm whitespace-nowrap">Preview Profile</span>
              </Button>
            </div>

            <div className="flex-1 flex justify-between items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-12 w-12 rounded-full bg-slate-50 border-none shadow-sm hover:bg-slate-100 transition-transform active:scale-95 shrink-0"
                  >
                    <Save className="h-5 w-5 text-indigo-500" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Save Card</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-12 w-12 rounded-full bg-slate-50 border-none shadow-sm hover:bg-slate-100 transition-transform active:scale-95 shrink-0"
                  >
                    <ImageIcon className="h-5 w-5 text-indigo-500" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Download Image</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-12 w-12 rounded-full bg-slate-50 border-none shadow-sm hover:bg-slate-100 transition-transform active:scale-95 shrink-0"
                  >
                    <LayoutGrid className="h-5 w-5 text-indigo-500" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Dashboard</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </TooltipProvider>
      </div>

      <UpgradePopup open={showUpgradePopup} onOpenChange={setShowUpgradePopup} />
      <ImageEditDialog open={showImageEditDialog} onOpenChange={setShowImageEditDialog} />
      <AccessoriesDialog open={showAccessoriesDialog} onOpenChange={setShowAccessoriesDialog} />
    </div>
  );
}

function BioFieldEdit({ label, fieldKey, placeholder }: { label: string, fieldKey: keyof typeof bioData, placeholder: string }) {
  // Logic is handled inline above.
  return null; 
}

function BioFieldRead({ label, value }: { label: string, value: string }) {
  // Logic is handled inline above.
  return null;
}
