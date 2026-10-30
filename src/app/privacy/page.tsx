'use client';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PrivacyPage() {
    const router = useRouter();

  return (
    <div className="flex flex-col min-h-dvh bg-accent text-foreground">
      <header className="sticky top-0 z-10 h-16 flex items-center justify-between px-4 bg-background border-b">
        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => router.back()}>
            <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-bold font-headline text-center absolute left-1/2 -translate-x-1/2">Privacy Policy</h1>
        <div />
      </header>

      <main className="flex-1 flex flex-col p-6 text-sm">
        <p className="text-muted-foreground mb-4">Last updated: December 29, 2025</p>

        <h2 className="text-lg font-bold mb-2">Terms of Service</h2>
        <h3 className="font-bold mb-2">1. Acceptance of Terms</h3>
        <p className="mb-4">By accessing and using SoloBizCards.com (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>

        <h3 className="font-bold mb-2">2. Description of Service</h3>
        <p className="mb-4">The Service provides users with a digital business card platform and a sales representative program. The core service is free for business owners, with potential for optional premium features. Sales reps can earn income by referring businesses to the platform.</p>

        <h3 className="font-bold mb-2">3. User Responsibilities</h3>
        <p className="mb-4">You are responsible for your own communications and for any consequences thereof. You will not use the Service for any purpose that is illegal or prohibited by these Terms.</p>

        <h3 className="font-bold mb-2">4. Disclaimer of Warranties</h3>
        <p className="mb-4">The service is provided &quot;as is&quot;. We and our suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement.</p>

        <h3 className="font-bold mb-2">5. Limitation of Liability</h3>
        <p className="mb-4">In no event will we, or our suppliers or licensors, be liable with respect to any subject matter of this agreement under any contract, negligence, strict liability or other legal or equitable theory for any special, incidental or consequential damages.</p>

        <h2 className="text-lg font-bold mt-4 mb-2">Privacy Policy</h2>
        <h3 className="font-bold mb-2">1. Information We Collect</h3>
        <p className="mb-4">We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, and role (Entrepreneur or Sales Rep).</p>

        <h3 className="font-bold mb-2">2. How We Use Information</h3>
        <p className="mb-4">We use the information we collect to provide, maintain, and improve our services, including to process transactions, develop new products, and personalize the services. We may also use the information to communicate with you about products, services, offers, and events.</p>

        <h3 className="font-bold mb-2">3. Information Sharing</h3>
        <p className="mb-4">We do not share your personal information with third parties except as described in this Privacy Policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</p>

        <h3 className="font-bold mb-2">4. Your Choices</h3>
        <p className="mb-4">You may update, correct or delete information about you at any time by logging into your online account or emailing us. If you wish to delete or deactivate your account, please email us, but note that we may retain certain information as required by law or for legitimate business purposes.</p>
      </main>
    </div>
  );
}
