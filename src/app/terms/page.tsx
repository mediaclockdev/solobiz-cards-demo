'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function TermsPage() {
    const router = useRouter();

  return (
    <div className="flex flex-col min-h-dvh bg-accent text-foreground">
      <header className="sticky top-0 z-10 h-16 flex items-center justify-between px-4 bg-background border-b">
        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => router.back()}>
            <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-bold font-headline text-center absolute left-1/2 -translate-x-1/2">Terms of Use</h1>
        <div />
      </header>

      <main className="flex-1 flex flex-col p-6 text-sm">
        <p className="text-muted-foreground mb-4">Last modified: December 2025</p>
        <p className="mb-4">
          Please carefully read these terms and conditions of use (&quot;Terms of Use&quot;) as they govern your access to and use of solo. cards, LLC’s (&quot;solo.,&quot; &quot;we,&quot; &quot;us,&quot; and &quot;our&quot;) Platform. Your acceptance of, and compliance with, these Terms of Use is a condition to your use of the following:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><a href="https://solocbizards.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://solobiz.cards/</a> (our “Website”);</li>
            <li>solo.card; and solo.tap (our “Devices”);</li>
            <li>(our “Software”)</li>
            <li>Any products (“Products”) available for purchase through our Website; and</li>
            <li>The services (“Services”) made available through our Website and/or Devices.</li>
        </ul>
        <p className="mb-4">
            The business support services, our Website are collectively referred to as our “Platform.”
        </p>
        <p className="mb-4">
          By clicking “Accept,” you acknowledge that you have read in its entirety, understand, and fully accept all terms and conditions contained in these Terms of Use and our <a href="https://solo.cards/about/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary underline">Privacy Policy</a>. If you do not agree to be bound by these Terms of Use and our Privacy Policy, you are not authorized to access or use our Platform and/or the Services, please <span className="font-bold">PROMPTLY EXIT THIS WEBSITE</span>.
        </p>

        <p className="font-bold mb-2">Binding Arbitration.</p> 
        <p className="mb-4">
          These Terms of Use provide that all disputes between you and solo. that in any way relate to these Terms of Use or your use of the Platform will be resolved by <span className="font-bold">BINDING ARBITRATION</span>. <span className="font-bold">ACCORDINGLY, YOU AGREE TO GIVE UP YOUR RIGHT TO GO TO COURT (INCLUDING IN A CLASS ACTION PROCEEDING)</span> to assert or defend your rights under these Terms of Use (except for matters that may be taken to small claims court). Your rights will be determined by a <span className="font-bold">NEUTRAL ARBITRATOR</span> and <span className="font-bold">NOT</span> a judge or jury and your claims cannot be brought as a class action. Please review the Section below entitled <span className="font-bold">Dispute Resolution; Arbitration Agreement</span> for the details regarding your agreement to arbitrate any disputes with solo.
        </p>

        <h2 className="text-lg font-bold mb-2">Ownership of the Platform</h2>
        <p className="mb-4">
          All pages, features and content within this Platform and any material made available for download are the property of solo., or its licensors or suppliers, as applicable. The Platform is protected by United States and international copyright and trademark laws. The contents of the Platform, including without limitation all data, files, documents, text, photographs, images, audio, and video, and any materials accessed through or made available for use or download through this Platform (“Content”) may not be copied, distributed, modified, reproduced, published or used, in whole or in part, except for purposes authorized by these Terms of Use or otherwise approved in writing by solo. You may not frame or utilize framing techniques to enclose, or deep link to, any name, trademarks, service marks, logo, Content or other proprietary information (including images, text, page layout, or form) of solo. without our express written consent.
        </p>

        <h2 className="text-lg font-bold mb-2">How to Contact Us:</h2>
        <div className="space-y-1">
          <p>SoloBizCards, LLC</p>
          <p>1929 E 32nd St.</p>
          <p>Baltimore, MD 21218</p>
          <p>Telephone: (786) 788-6983</p>
          <p>Email: support@solobizcards.com</p>
        </div>
      </main>
    </div>
  );
}
