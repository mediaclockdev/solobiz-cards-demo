export interface HelpArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  collectionSlug: string;
  collectionName: string;
  lastUpdated: string;
  views?: string;
  content: string;
}

export interface HelpCollection {
  id: string;
  slug: string;
  name: string;
  description: string;
  iconName: string;
  articleCount: number;
  featured?: boolean;
}

export interface SupportFAQ {
  question: string;
  answer: string;
  category: string;
}

export const HELP_COLLECTIONS: HelpCollection[] = [
  {
    id: 'tips-tricks',
    slug: 'tips-tricks',
    name: 'Tips & Tricks',
    description: 'Guides and best practices to help you make the most of your Solo smart cards and digital profile.',
    iconName: 'BookOpen',
    articleCount: 6,
    featured: true,
  },
  {
    id: 'troubleshooting',
    slug: 'troubleshooting',
    name: 'Troubleshooting',
    description: 'Solutions for scanning issues, phone compatibility, NFC settings, and profile display.',
    iconName: 'AlertCircle',
    articleCount: 6,
    featured: true,
  },
  {
    id: 'my-order',
    slug: 'my-order',
    name: 'My Order & Hardware',
    description: 'Everything you need to know about your order, shipping, warranty, returns, and accessories.',
    iconName: 'Package',
    articleCount: 6,
    featured: true,
  },
  {
    id: 'general',
    slug: 'general',
    name: 'General',
    description: 'Answers to common questions about SoloBizCards, pricing, and how contactless networking works.',
    iconName: 'HelpCircle',
    articleCount: 6,
    featured: true,
  },
  {
    id: 'billing-payments',
    slug: 'billing-payments',
    name: 'Billing & Payments',
    description: 'Information regarding free tier access, PRO features, billing receipts, and subscriptions.',
    iconName: 'CreditCard',
    articleCount: 4,
    featured: false,
  },
  {
    id: 'features-tools',
    slug: 'features-tools',
    name: 'Features & Tools',
    description: 'Detailed guides for CRM lead capture, analytics, QR code downloads, and productivity integrations.',
    iconName: 'Sparkles',
    articleCount: 4,
    featured: false,
  },
];

export const HELP_ARTICLES: HelpArticle[] = [
  // Tips & Tricks
  {
    id: 'tips-1',
    slug: 'how-to-share-digital-business-card',
    title: 'How to share your digital business card via NFC and QR code',
    summary: 'Master the two fastest ways to exchange contacts with zero apps required for the recipient.',
    collectionSlug: 'tips-tricks',
    collectionName: 'Tips & Tricks',
    lastUpdated: 'Updated 2 days ago',
    views: '2.5k views',
    content: `SoloBizCards makes sharing effortless with two instant methods:

### 1. Instant NFC Tap
- Simply hold your **Solo Smart Card**, **Solo.Metal**, **Solo.Band**, or phone with **Solo.Thin 2.0** near the other person's smartphone.
- **For iPhone:** Tap the top front or top back edge of their phone.
- **For Android:** Tap near the center back of their device.
- A notification pops up instantly opening your **solo.Profile** in their web browser — no app download or sign-in needed!

### 2. Dynamic QR Code
- If the other person has NFC turned off or has an older device, open your card's unique QR code from your dashboard or wallet.
- Have them scan it using their native smartphone camera app.
- They are immediately taken directly to your profile where they can tap **"Save Contact"** to add your vCard straight into their phone's address book.`,
  },
  {
    id: 'tips-2',
    slug: 'customize-profile-for-leads',
    title: 'How to customize your solo.Profile for maximum lead conversions',
    summary: 'Turn casual profile views into paying clients with high-converting layouts and calls to action.',
    collectionSlug: 'tips-tricks',
    collectionName: 'Tips & Tricks',
    lastUpdated: 'Updated 1 week ago',
    views: '1.8k views',
    content: `Your **solo.Profile** is not just an electronic business card — it's an automated lead capture engine:

- **Add a high-resolution headshot & logo:** Profiles with professional photos receive 72% higher engagement.
- **Position your Primary Action above the fold:** Put your most important call-to-action (e.g. "Book Consultation", "Get a Quote", or "Call Now") at the top.
- **Enable the Lead Capture Form:** When visitors tap "Connect", they can submit their name, email, phone number, and custom notes directly into your SoloBizCards CRM.
- **Showcase Social Proof & Portfolio:** Add direct links to your Google Reviews, LinkedIn, Instagram, and website portfolio.`,
  },
  {
    id: 'tips-3',
    slug: 'add-and-reorder-links',
    title: 'How to add and reorder links on your profile',
    summary: 'Easily update your website, social media, contact channels, and portfolio links in real time.',
    collectionSlug: 'tips-tricks',
    collectionName: 'Tips & Tricks',
    lastUpdated: 'Updated 2 weeks ago',
    views: '1.2k views',
    content: `You can update your links anytime and the changes apply immediately without needing a new physical card:

1. Log in to your SoloBizCards dashboard at [dash.solobizcards.com](https://dash.solobizcards.com).
2. Navigate to **Cards** > **Edit Profile** > **Links & Socials**.
3. Click **Add Link** and choose from Contact Links (Phone, Email, WhatsApp, SMS), Social Media (LinkedIn, Instagram, Facebook, X), or Custom URLs.
4. Drag and drop the handles to reorder links in order of importance.
5. Click **Save Changes** — any card or QR code previously tapped will automatically display the new links.`,
  },
  {
    id: 'tips-4',
    slug: 'google-calendar-integration',
    title: 'Connecting Google Calendar for seamless appointment scheduling',
    summary: 'Let prospects and clients book calls directly from your digital business card.',
    collectionSlug: 'tips-tricks',
    collectionName: 'Tips & Tricks',
    lastUpdated: 'Updated 3 weeks ago',
    views: '980 views',
    content: `Allow clients to book appointments with you in one tap:

1. In your dashboard, go to **Add Content** > **Productivity Links**.
2. Select **Google Calendar Appointment Schedule** (or Calendly).
3. Paste your public scheduling link (e.g., \`https://calendar.google.com/calendar/appointments/schedules/...\`).
4. Give your button an inviting title such as *"Book a 15-Min Discovery Call"*.
5. When prospects view your solo.Profile, tapping the button directly loads your available calendar slots without back-and-forth emails.`,
  },
  {
    id: 'tips-5',
    slug: 'best-phone-placement-techniques',
    title: 'Best phone placement techniques for fast NFC scans',
    summary: 'Where to position your card for 1-second connections every time.',
    collectionSlug: 'tips-tricks',
    collectionName: 'Tips & Tricks',
    lastUpdated: 'Updated 1 month ago',
    views: '1.4k views',
    content: `NFC chips require close proximity (within 1–2 inches) to read:

- **iPhones:** The NFC reader is located at the **very top edge** of the iPhone (next to the ear speaker / cameras). Hold your Solo card flush against the top back edge.
- **Android devices:** Most Android manufacturers place the NFC sensor directly in the **center back** of the phone.
- **Screen must be on:** For security, both iOS and Android require the screen to be unlocked or woken up before receiving NFC tags.`,
  },
  {
    id: 'tips-6',
    slug: 'grow-crm-with-lead-capture',
    title: 'How to use contact capture forms to grow your CRM',
    summary: 'Automatically collect phone numbers and emails when networking at events or meetings.',
    collectionSlug: 'tips-tricks',
    collectionName: 'Tips & Tricks',
    lastUpdated: 'Updated 1 month ago',
    views: '1.1k views',
    content: `SoloBizCards features **Two-Way Contact Exchange**:

1. When someone taps your card, they receive your details.
2. An interactive prompt invites them to share their details back with you.
3. Once they enter their name, email, and phone number, their contact information is automatically saved into your SoloBizCards Leads CRM.
4. You receive an instant email and SMS alert with their contact details so you can follow up while you're still top of mind.`,
  },

  // Troubleshooting
  {
    id: 'trouble-1',
    slug: 'where-is-nfc-antenna',
    title: 'Where is the NFC antenna on iPhone vs Android?',
    summary: 'A visual and practical guide to finding the sweet spot on every modern smartphone.',
    collectionSlug: 'troubleshooting',
    collectionName: 'Troubleshooting',
    lastUpdated: 'Updated 4 days ago',
    views: '3.1k views',
    content: `Knowing where to tap guarantees a smooth scanning experience:

### Apple iPhones (iPhone XR, XS, 11, 12, 13, 14, 15, 16 & newer)
- **Sensor Location:** Top back edge, right next to the camera bump.
- **Action:** Tap the top edge of the iPhone against your Solo card.
- **Requirement:** The phone screen must be awake (not on a fully black locked screen).

### Android Phones (Samsung, Google Pixel, Motorola, OnePlus)
- **Sensor Location:** Center of the back cover.
- **Action:** Tap your Solo card against the center back of their device.
- **Requirement:** NFC must be enabled in the phone's Settings > Connected Devices > NFC.`,
  },
  {
    id: 'trouble-2',
    slug: 'why-is-nfc-not-scanning',
    title: "Why isn't my NFC card scanning?",
    summary: 'Follow this 4-step checklist if a smartphone does not react when tapping your card.',
    collectionSlug: 'troubleshooting',
    collectionName: 'Troubleshooting',
    lastUpdated: 'Updated 1 week ago',
    views: '2.8k views',
    content: `If your card isn't reading on a phone, check these common reasons:

1. **Screen is locked/asleep:** Modern smartphones will not scan NFC while the screen is completely black to save battery and prevent unauthorized scans. Wake the screen first.
2. **Wrong sweet spot:** On iPhone, tap near the **top edge**. On Android, tap the **center back**.
3. **Thick or metal phone cases:** Heavy wallet cases or cases with built-in metal plates (for magnetic car mounts) can block the radio frequency signal. Test by tapping the front screen or opening the camera for QR fallback.
4. **Airplane mode or Camera app open:** If the camera or Apple Pay / Google Wallet is already open, the OS might prioritize that app over background NFC reading. Close open camera/wallet apps and tap again.`,
  },
  {
    id: 'trouble-3',
    slug: 'enable-nfc-on-phone',
    title: 'How to enable NFC on your phone',
    summary: 'Quick instructions for Android and iPhone settings to ensure NFC is active.',
    collectionSlug: 'troubleshooting',
    collectionName: 'Troubleshooting',
    lastUpdated: 'Updated 2 weeks ago',
    views: '1.9k views',
    content: `- **On iPhone:** NFC is always permanently enabled by Apple on iPhone XR and all newer models (XS, 11, 12, 13, 14, 15, 16). There is no toggle switch needed.
- **On Android:**
  1. Swipe down from the top of the screen to view the Quick Settings tiles.
  2. Look for the **NFC** tile and tap to enable it.
  3. Alternatively, open **Settings** > **Connected devices** (or Connections) > **Connection preferences** > toggle **NFC** to ON.`,
  },
  {
    id: 'trouble-4',
    slug: 'phone-cases-interfere-with-nfc',
    title: 'Do phone cases interfere with NFC scanning?',
    summary: 'Which cases work seamlessly and which ones might block the contactless signal.',
    collectionSlug: 'troubleshooting',
    collectionName: 'Troubleshooting',
    lastUpdated: 'Updated 3 weeks ago',
    views: '850 views',
    content: `Most regular phone cases (silicone, TPU, leather, and thin plastic) do **not** interfere with NFC at all.

However, the following might block or degrade the NFC signal:
- Heavy-duty cases with metal kickstands or aluminum backing.
- Magnetic metal plates used for magnetic car mounts placed directly over the antenna.
- Extra-thick wallet cases with multiple RFID-blocking credit cards stacked inside.

**Solution:** In these rare situations, use the dynamic QR code on the back of your card or in your Apple/Google Wallet!`,
  },
  {
    id: 'trouble-5',
    slug: 'card-or-profile-disabled',
    title: 'Why is my card or profile showing as disabled?',
    summary: 'How to check your account status, activate a card, or unblock your public profile.',
    collectionSlug: 'troubleshooting',
    collectionName: 'Troubleshooting',
    lastUpdated: 'Updated 1 month ago',
    views: '620 views',
    content: `If tapping your card shows a "Profile Disabled" or "Card Inactive" message:

1. **Check Card Activation:** If you recently received a new card, ensure you activated it by logging into [dash.solobizcards.com](https://dash.solobizcards.com) and linking it under **Cards & Hardware**.
2. **Privacy / Stealth Mode:** Check if you turned on "Stealth Mode" or toggled the profile visibility switch to Private in your dashboard settings.
3. **Subscription Status:** Free accounts retain lifetime profile access. If you had a PRO trial that expired, your core card remains active, but premium add-ons may need attention.
4. **Contact Support:** If you believe there is a glitch, reach out to \`support@solobiz.cards\` with your account email and card ID.`,
  },
  {
    id: 'trouble-6',
    slug: 'recipient-no-nfc',
    title: "What to do if a recipient's phone doesn't have NFC",
    summary: 'Fallback options including camera QR codes, offline wallet passes, and SMS sharing.',
    collectionSlug: 'troubleshooting',
    collectionName: 'Troubleshooting',
    lastUpdated: 'Updated 1 month ago',
    views: '1.3k views',
    content: `Over 95% of smartphones in use today have NFC. For the rare exception (older phones or tablets):

1. **Scan the Card QR Code:** Every physical Solo Smart Card and accessory features a high-contrast laser-etched dynamic QR code on the back.
2. **Digital Wallet Card:** Save your Solo card pass to Apple Wallet or Google Wallet. You can display your pass directly on your phone or Apple Watch screen for them to scan.
3. **Direct URL / Text:** Send your custom short URL (e.g. \`solobiz.cards/p/yourname\`) via text, WhatsApp, or email.`,
  },

  // My Order & Hardware
  {
    id: 'order-1',
    slug: 'shipping-times-tracking',
    title: 'How long does shipping take and how do I track my order?',
    summary: 'Standard delivery times, express courier options, and tracking updates.',
    collectionSlug: 'my-order',
    collectionName: 'My Order & Hardware',
    lastUpdated: 'Updated 3 days ago',
    views: '2.1k views',
    content: `Here is what you can expect when ordering Solo accessories:

- **Order Processing:** Orders are programmed, inspected, and dispatched within 1–2 business days.
- **Standard Shipping (US & Canada):** Typically arrives within 3–5 business days via USPS / Canada Post.
- **International Shipping:** Takes 7–14 business days depending on destination customs clearance.
- **Tracking:** Once your package ships, a tracking number is automatically emailed to you. You can also view live delivery status in your dashboard under **Order History**.`,
  },
  {
    id: 'order-2',
    slug: 'lifetime-hardware-warranty',
    title: 'What is covered under the Solo Lifetime Hardware Warranty?',
    summary: 'Understand our replacement policy for NFC chips, materials, and wear-and-tear.',
    collectionSlug: 'my-order',
    collectionName: 'My Order & Hardware',
    lastUpdated: 'Updated 1 week ago',
    views: '1.5k views',
    content: `Every physical SoloBizCards hardware product comes backed by our **Lifetime Hardware Guarantee**:

- **NFC Chip Functionality:** If the internal NFC chip ever stops transmitting data under normal use, we will replace it free of charge.
- **Manufacturing Defects:** Any peeling, printing flaw, or delamination occurring within 1 year is fully replaced.
- **Lost or Stolen Protection:** If you lose your card, you don't have to rebuild your profile. Order a replacement card at an exclusive discounted rate and link it to your existing profile in seconds.`,
  },
  {
    id: 'order-3',
    slug: 'difference-between-devices',
    title: "What's the difference between Solo Smart Card, Solo.Metal, Solo.Band, and Solo.Thin 2.0?",
    summary: 'A breakdown of each form factor so you choose the perfect networking tool.',
    collectionSlug: 'my-order',
    collectionName: 'My Order & Hardware',
    lastUpdated: 'Updated 2 weeks ago',
    views: '3.4k views',
    content: `Each Solo product is designed for a unique lifestyle and networking setting:

### 1. Solo Smart Card (Matte PVC)
- Standard credit-card size that fits into any wallet or pocket.
- Waterproof, flexible, and ultra-durable with high-speed NFC + laser QR code.

### 2. Solo.Metal (Stainless Steel)
- Forged in premium heavyweight stainless steel with matte laser-engraved branding.
- Luxurious weight that leaves an unforgettable impression during executive meetings and high-stakes pitches.

### 3. Solo.Band (Waterproof Wristband)
- Wearable, hands-free silicone NFC wristband.
- 100% waterproof — ideal for trade shows, conferences, gyms, outdoor networking, and sports.

### 4. Solo.Thin 2.0 (Phone Tap Sticker)
- Ultra-slim 3M adhesive sticker placed on the back of your smartphone.
- You never leave home without your phone, so you'll never be caught without your business card!

### 5. Acrylic POS Countertop Display
- Sleek standing acrylic display for retail counters, reception desks, trade show booths, or restaurant tables.
- Customers tap to leave Google reviews, follow socials, or join VIP lists.`,
  },
  {
    id: 'order-4',
    slug: 'acrylic-countertop-display-storefronts',
    title: 'How does the Acrylic POS Countertop Display work for storefronts?',
    summary: 'Collect 5-star Google reviews and social followers with hands-free taps at the register.',
    collectionSlug: 'my-order',
    collectionName: 'My Order & Hardware',
    lastUpdated: 'Updated 3 weeks ago',
    views: '1.2k views',
    content: `The **Solo Acrylic POS Countertop Display** is built specifically for physical businesses:

- Position the stand next to your cash register, reception desk, or restaurant tables.
- Customers tap their smartphone against the top of the acrylic stand or scan the prominent QR code.
- It instantly redirects them to your Google Review page, Instagram profile, Wi-Fi login, or lead capture form.
- You can change where the stand redirects to anytime from your online dashboard without touching the physical stand!`,
  },
  {
    id: 'order-5',
    slug: 'what-if-i-lose-my-card',
    title: 'What if I lose my Solo card or accessory?',
    summary: 'Instantly deactivate lost cards and link replacements without losing your profile data.',
    collectionSlug: 'my-order',
    collectionName: 'My Order & Hardware',
    lastUpdated: 'Updated 1 month ago',
    views: '740 views',
    content: `Don't worry — your profile data is safely stored in the cloud:

1. Log into your dashboard at [dash.solobizcards.com](https://dash.solobizcards.com).
2. Go to **Settings** > **Hardware** and toggle the lost device to **Disabled**. This ensures nobody else can access your profile with the lost physical card.
3. Order a replacement card or use an existing backup accessory.
4. When your new card arrives, click **Activate New Card** to instantly bind it to your existing profile — all your links, leads, and analytics remain intact.`,
  },
  {
    id: 'order-6',
    slug: 'gift-solo-device',
    title: 'Can I gift a Solo smart card or bundle to someone else?',
    summary: 'How to purchase SoloBizCards products as gifts without pre-linking personal information.',
    collectionSlug: 'my-order',
    collectionName: 'My Order & Hardware',
    lastUpdated: 'Updated 1 month ago',
    views: '890 views',
    content: `Yes! Solo hardware devices arrive unlinked by default:

- The recipient will open the packaging, tap the card against their phone, and be guided through a simple 60-second account creation flow.
- You do not need to know their business details or profile information in advance.
- You can order Solo Bundles, Solo.Metal, or Solo.Bands as gifts for clients, employees, colleagues, or graduation presents.`,
  },

  // General
  {
    id: 'gen-1',
    slug: 'what-is-solobizcards',
    title: 'What is SoloBizCards and how does it work?',
    summary: 'The all-in-one digital business card and automated lead generator built for solo business owners.',
    collectionSlug: 'general',
    collectionName: 'General',
    lastUpdated: 'Updated 2 days ago',
    views: '4.2k views',
    content: `SoloBizCards is an automated lead generation and contactless networking platform created specifically for solo entrepreneurs, freelancers, real estate agents, contractors, and sales professionals.

- **Ditch Paper Cards:** Over 88% of paper business cards are thrown away within one week. SoloBizCards eliminates printing expenses forever.
- **Tap & Connect:** Share your contact details, portfolio, booking links, and payment methods in one second using NFC technology.
- **Automated CRM:** Capture contact information from people who view your card and organize leads effortlessly.
- **Earn While You Share:** Earn 30% to 70% recurring affiliate commissions by helping others in your network switch to digital cards.`,
  },
  {
    id: 'gen-2',
    slug: 'does-other-person-need-an-app',
    title: 'Does the other person need an app to receive my contact details?',
    summary: 'Zero app required. Everything works seamlessly in the standard mobile browser.',
    collectionSlug: 'general',
    collectionName: 'General',
    lastUpdated: 'Updated 3 days ago',
    views: '5.6k views',
    content: `**No!** The other person does **not** need an app, and they do not need to register for an account.

When you tap your Solo card against their phone (or they scan your QR code), your digital profile automatically opens in their phone's native web browser (Safari, Chrome, Samsung Internet). From there, they can:
- Tap **"Save to Contacts"** to immediately download your complete vCard contact card into their phone.
- Call, text, or email you with one touch.
- View all your social media links, portfolio items, and booking calendar.`,
  },
  {
    id: 'gen-3',
    slug: 'does-other-person-need-solo-card',
    title: 'Does the recipient need a Solo card to connect?',
    summary: 'Only one person needs a Solo device for everyone to connect.',
    collectionSlug: 'general',
    collectionName: 'General',
    lastUpdated: 'Updated 1 week ago',
    views: '2.4k views',
    content: `**Only one person needs a Solo card!** 

As long as you have your Solo card, phone sticker, or keychain, anyone with a modern smartphone can connect with you. If they want their own digital card after seeing how slick yours is, you can share your referral link and earn a commission when they order!`,
  },
  {
    id: 'gen-4',
    slug: 'difference-solo-profile-and-profile-plus',
    title: 'What is the difference between solo.Profile and solo.Profile+?',
    summary: 'Compare core lifetime access against advanced lead capture and analytics features.',
    collectionSlug: 'general',
    collectionName: 'General',
    lastUpdated: 'Updated 2 weeks ago',
    views: '1.9k views',
    content: `Every physical Solo card includes **FREE lifetime access to solo.Profile**:

### Standard solo.Profile (FREE Lifetime)
- Unlimited taps and shares.
- Real-time profile editing.
- Full contact details & vCard download.
- Social media and custom URL links.
- Dynamic QR code generation.

### solo.Profile+ (Advanced Business Suite)
- Automated Two-Way Contact Exchange CRM.
- Deep analytics (tap count, link click tracking, geographic views).
- Custom domain mapping (use your own domain name).
- Google Calendar and appointment booking integrations.
- Lead export to CSV and CRM integrations.`,
  },
  {
    id: 'gen-5',
    slug: 'affiliate-program-and-21-day-challenge',
    title: 'How does the SoloBizCards Affiliate Program and 21-Day Challenge work?',
    summary: 'Turn your networking into recurring passive income with 30%–70% commission payouts.',
    collectionSlug: 'general',
    collectionName: 'General',
    lastUpdated: 'Updated 2 weeks ago',
    views: '3.0k views',
    content: `Turn networking into a lucrative income stream:

- **Generous Commission Structure:** Earn between **30% and 70%** on paid users and hardware purchases recruited through your unique referral link.
- **The 21-Day Challenge:** Starts on the 1st of every month. Participants receive proven templates, outreach scripts, and leaderboard competitions with cash bonuses for the top performers.
- **Automated Payouts:** Track your referral clicks, active customers, and earnings inside your dedicated partner dashboard.`,
  },
  {
    id: 'gen-6',
    slug: 'are-paper-business-cards-dead',
    title: 'Are traditional paper business cards dead?',
    summary: 'Why over 88% of paper business cards get thrown away and why digital is taking over.',
    collectionSlug: 'general',
    collectionName: 'General',
    lastUpdated: 'Updated 3 weeks ago',
    views: '1.7k views',
    content: `The statistics are overwhelming:

- **88%** of paper business cards are tossed in the trash within 7 days.
- **72%** of professionals judge a company by the quality of their business card.
- Over **8 billion** paper cards are wasted globally each year.
- Switching to digital cards reduces paper consumption by **90%** and slashes printing costs while ensuring your contact information never gets lost or outdated.`,
  },

  // Billing & Subscriptions
  {
    id: 'billing-1',
    slug: 'is-solobizcards-free',
    title: 'Is SoloBizCards really free?',
    summary: 'Details on our free digital card tier and optional premium upgrades.',
    collectionSlug: 'billing-payments',
    collectionName: 'Billing & Payments',
    lastUpdated: 'Updated 1 week ago',
    views: '3.8k views',
    content: `**Yes!** You can create and use your digital business card completely free.

- No credit card is required to sign up.
- You can share your card via QR code, text, email, and link for free.
- Physical NFC cards and accessories can be purchased as one-time hardware orders with free lifetime solo.Profile access included.`,
  },
  {
    id: 'billing-2',
    slug: 'how-to-manage-subscription',
    title: 'How do I upgrade or manage my subscription?',
    summary: 'Step-by-step instructions for managing plans, billing cycles, and payment methods.',
    collectionSlug: 'billing-payments',
    collectionName: 'Billing & Payments',
    lastUpdated: 'Updated 2 weeks ago',
    views: '920 views',
    content: `1. Log in to [dash.solobizcards.com](https://dash.solobizcards.com).
2. Go to **Settings** > **Billing & Subscription**.
3. Here you can view your current plan, upgrade to PRO, switch between monthly and annual billing, or update your credit card details.`,
  },
  {
    id: 'billing-3',
    slug: 'where-to-download-invoices',
    title: 'Where can I view and download my invoices?',
    summary: 'Access PDF receipts and tax invoices for all hardware orders and subscriptions.',
    collectionSlug: 'billing-payments',
    collectionName: 'Billing & Payments',
    lastUpdated: 'Updated 3 weeks ago',
    views: '610 views',
    content: `All invoices are permanently stored in your account:

- Navigate to **Settings** > **Billing** > **Invoices**.
- Click **Download PDF** on any billing event to download a receipt for your business expense records.`,
  },
  {
    id: 'billing-4',
    slug: 'refund-cancellation-policy',
    title: 'What is the refund and cancellation policy?',
    summary: 'Our 30-day satisfaction guarantee and easy one-click cancellation policy.',
    collectionSlug: 'billing-payments',
    collectionName: 'Billing & Payments',
    lastUpdated: 'Updated 1 month ago',
    views: '840 views',
    content: `- **Subscriptions:** You can cancel your subscription at any time with one click. You will retain access until the end of your billing cycle.
- **Hardware:** We offer a 30-day money-back satisfaction guarantee on all hardware products if you are not completely delighted.`,
  },

  // Features & Tools
  {
    id: 'feat-1',
    slug: 'automated-crm-and-lead-capture',
    title: 'How does the automated CRM and lead capture work?',
    summary: 'Capture, categorize, and follow up with leads directly from your digital business card.',
    collectionSlug: 'features-tools',
    collectionName: 'Features & Tools',
    lastUpdated: 'Updated 1 week ago',
    views: '1.6k views',
    content: `SoloBizCards features an integrated lightweight CRM designed specifically for solo operators:

- Whenever someone connects with you, their name, phone, email, company, and meeting notes are stored in your **Leads** tab.
- Set tags like "Hot Lead", "Local Client", or "Follow-up Needed".
- Export your contacts in standard CSV format anytime to import into HubSpot, Salesforce, or your email marketing software.`,
  },
  {
    id: 'feat-2',
    slug: 'custom-qr-code-downloads',
    title: 'How do I download and customize my dynamic QR code?',
    summary: 'Download high-resolution vector and PNG QR codes for marketing materials.',
    collectionSlug: 'features-tools',
    collectionName: 'Features & Tools',
    lastUpdated: 'Updated 2 weeks ago',
    views: '1.3k views',
    content: `Every card has a dynamic QR code that always points to your active profile:

1. In your dashboard, click **QR Code**.
2. Customize the foreground color, center logo, and frame style.
3. Download in high-resolution PNG or SVG vector format.
4. Use it on flyers, email signatures, presentation slides, or storefront signage!`,
  },
  {
    id: 'feat-3',
    slug: 'analytics-and-metrics',
    title: 'How do card analytics and view metrics work?',
    summary: 'Track how many people tap your card, click your links, and save your contact info.',
    collectionSlug: 'features-tools',
    collectionName: 'Features & Tools',
    lastUpdated: 'Updated 3 weeks ago',
    views: '990 views',
    content: `See real-time statistics on your networking ROI:

- **Total Taps & Views:** Number of times your card was tapped or scanned.
- **Link Click Rates:** Discover which links (e.g. your Instagram vs Portfolio) get the most attention.
- **Contact Saves:** See how many people saved your vCard directly to their contacts.`,
  },
  {
    id: 'feat-4',
    slug: 'export-contacts-to-csv',
    title: 'Can I export my collected contacts to CSV or my CRM?',
    summary: 'Keep full ownership of your customer list with quick one-click data export.',
    collectionSlug: 'features-tools',
    collectionName: 'Features & Tools',
    lastUpdated: 'Updated 1 month ago',
    views: '710 views',
    content: `Yes, you own 100% of your data:

- Navigate to the **Leads** tab.
- Click **Export Leads**.
- Choose between CSV, Excel, or vCard format to import into Google Contacts, Outlook, or any CRM platform.`,
  },
];

export const HOME_FAQS: SupportFAQ[] = [
  {
    category: 'General',
    question: 'Are traditional paper business cards dead?',
    answer: 'Over 88% of paper business cards are thrown away within one week, and 72% of people judge a business by the quality of its card. SoloBizCards eliminates recurring printing costs and ensures your contact details go straight into a prospect’s phone.',
  },
  {
    category: 'General',
    question: 'What are the benefits of a digital business card?',
    answer: 'You never run out of cards, you can update your phone, email, and links anytime without re-printing, and recipients can save your contact details with a single tap. Plus, built-in lead capture helps you build a client list automatically.',
  },
  {
    category: 'Pricing',
    question: 'How much does a digital business card cost?',
    answer: 'You can create your free digital business card with no credit card required. Physical NFC smart accessories (Solo Smart Card, stainless steel Solo.Metal, Solo.Band wristbands, or phone stickers) are available with free lifetime profile access included.',
  },
  {
    category: 'Sharing',
    question: "What's the best way to share a digital business card?",
    answer: 'Simply tap your Solo card or accessory against any modern smartphone! If the other person has NFC turned off or has an older device, they can scan your card’s dynamic QR code with their camera.',
  },
  {
    category: 'Technology',
    question: 'How do NFC business cards work?',
    answer: 'NFC (Near Field Communication) uses safe, short-range wireless technology. When placed within 1–2 inches of a smartphone, the phone detects your encrypted profile link and opens it instantly in their browser with zero app required.',
  },
  {
    category: 'Compatibility',
    question: 'Does the other person need an app to view my card?',
    answer: 'No app is needed! Your solo.Profile opens automatically in their default web browser (Safari, Chrome, etc.), where they can view your links and save your vCard directly into their contacts.',
  },
];

export const POPULAR_ARTICLES = [
  {
    title: 'How to Create Your First Digital Card',
    views: '2.5k views',
    slug: 'how-to-share-digital-business-card',
    collectionSlug: 'tips-tricks',
  },
  {
    title: 'Setting Up Passive Income Streams',
    views: '1.8k views',
    slug: 'affiliate-program-and-21-day-challenge',
    collectionSlug: 'general',
  },
  {
    title: 'Customizing Your Card Design',
    views: '1.2k views',
    slug: 'customize-profile-for-leads',
    collectionSlug: 'tips-tricks',
  },
  {
    title: 'Where is the NFC antenna on iPhone vs Android?',
    views: '3.1k views',
    slug: 'where-is-nfc-antenna',
    collectionSlug: 'troubleshooting',
  },
];

export function getCollection(slug: string): HelpCollection | undefined {
  return HELP_COLLECTIONS.find((c) => c.slug === slug);
}

export function getArticlesByCollection(collectionSlug: string): HelpArticle[] {
  return HELP_ARTICLES.filter((a) => a.collectionSlug === collectionSlug);
}

export function getArticle(collectionSlug: string, articleSlug: string): HelpArticle | undefined {
  return HELP_ARTICLES.find(
    (a) => a.collectionSlug === collectionSlug && a.slug === articleSlug
  );
}

export function searchArticles(query: string): HelpArticle[] {
  if (!query || query.trim() === '') return [];
  const q = query.toLowerCase().trim();
  return HELP_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.content.toLowerCase().includes(q) ||
      a.collectionName.toLowerCase().includes(q)
  );
}
