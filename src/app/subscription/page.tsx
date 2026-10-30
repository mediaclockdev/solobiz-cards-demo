'use client';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SubscriptionPolicyPage() {
    const router = useRouter();

  return (
    <div className="flex flex-col min-h-dvh bg-accent text-foreground">
      <header className="sticky top-0 z-10 h-16 flex items-center justify-between px-4 bg-background border-b">
        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => router.back()}>
            <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-bold font-headline text-center absolute left-1/2 -translate-x-1/2">Subscription Policy</h1>
        <div />
      </header>

      <main className="flex-1 flex flex-col p-6 text-sm">
        <h2 className="text-lg font-bold mb-2">Trial Period</h2>
        <p className="font-bold mb-2">Trial Offer</p>
        <p className="mb-4">We offer a trial period for new subscribers to experience solo.Profile+ features.</p>
        <p className="font-bold mb-2">Duration and Terms</p>
        <p className="mb-4">The duration and specific terms of the trial will be clearly stated at the time of sign-up.</p>
        <p className="font-bold mb-2">End of Trial</p>
        <p className="mb-4">Subscribers will be automatically enrolled in the chosen subscription plan at the end of the trial period, unless they cancel prior to the trial&apos;s expiration.</p>

        <h2 className="text-lg font-bold mb-2">Subscription Refunds</h2>
        <p className="font-bold mb-2">No Refunds Policy</p>
        <p className="mb-4">Once a subscription starts, refunds are not offered for any reason.</p>
        <p className="font-bold mb-2">Access Upon Cancellation</p>
        <p className="mb-4">If you cancel your subscription, access to solo.Profile+ features will end immediately. Any unused subscription time will be credited to your account, allowing you to apply this balance should you decide to resubscribe in the future.</p>
        <p className="font-bold mb-2">Post-Trial Policy</p>
        <p className="mb-4">No refunds are issued after the free trial ends, even if cancellation occurs immediately after the trial expires.</p>

        <h2 className="text-lg font-bold mb-2">Renewal Policy</h2>
        <p className="font-bold mb-2">Automatic Renewal</p>
        <p className="mb-4">Subscriptions to solo.Profile+ automatically renew at the end of each billing cycle.</p>
        <p className="font-bold mb-2">Notification of Renewal</p>
        <p className="mb-4">We will send an email reminder prior to renewal, giving you ample time to decide if you wish to continue, change, or cancel your subscription.</p>
        <p className="font-bold mb-2">Opting Out of Auto-Renewal</p>
        <p className="mb-4">You can opt out of auto-renewal by following the cancellation process outlined in the &quot;Canceling a Subscription&quot; section.</p>

        <h2 className="text-lg font-bold mb-2">Changing Subscription Fees</h2>
        <p className="font-bold mb-2">Notification of Price Changes</p>
        <p className="mb-4">In the event of a subscription fee change, we will provide a 30-day notice before the new pricing takes effect.</p>
        <p className="font-bold mb-2">Right to Cancel</p>
        <p className="mb-4">During this notice period, subscribers have the right to cancel their subscription if they do not wish to continue at the new rate.</p>

        <h2 className="text-lg font-bold mb-2">Contacting Support</h2>
        <p className="font-bold mb-2">Customer Support Access</p>
        <p className="mb-4">For any inquiries, issues, or assistance with your subscription, you can reach out to our support team.</p>
        <p className="font-bold mb-2">Contact Methods</p>
        <p className="mb-4">Support can be contacted via subscriptions@solobizcards.com.</p>
        <p className="font-bold mb-2">Response Time</p>
        <p className="mb-4">Our support team endeavors to respond to all inquiries within a reasonable timeframe.</p>
        
        <h2 className="text-lg font-bold mb-2">Canceling a Subscription</h2>
        <p className="font-bold mb-2">Cancellation Deadline</p>
        <p className="mb-4">To cancel your subscription, you must do so at least 24 hours before your next billing date.</p>
        <p className="font-bold mb-2">How to Cancel</p>
        <p className="mb-4">Navigate to Account Info &gt; Settings &gt; solo.Profile+ &gt; Your Subscription &gt; Cancel Subscription.</p>
        <p className="font-bold mb-2">Access During Billing Period</p>
        <p className="mb-4">If you cancel during the middle of a billing period, you will retain access to solo.Profile+ features until the end of that billing cycle. Afterward, you will be automatically downgraded to the standard solo.Profile.</p>

        <h2 className="text-lg font-bold mb-2">Subscription Pricing</h2>
        <p className="font-bold mb-2">Monthly Subscription</p>
        <p className="mb-4">$12.25 per month, billed monthly.</p>
        <p className="font-bold mb-2">Annual Subscription</p>
        <p className="mb-4">$9.80 per month, billed annually (total $117.60 per year).</p>
        
        <h2 className="text-lg font-bold mb-2">Upgrading from Monthly to Annually</h2>
        <p className="font-bold mb-2">Pro-Rating Charges</p>
        <p className="mb-4">If you upgrade from a monthly to an annual plan mid-cycle, Stripe will automatically calculate and apply the prorated amount for the remaining period.</p>
        <p className="font-bold mb-2">Immediate Cost Savings</p>
        <p className="mb-4">You will benefit from the cost savings of the annual plan immediately upon upgrading.</p>

        <h2 className="text-lg font-bold mb-2">Downgrading from Annual to Monthly</h2>
        <p className="font-bold mb-2">Start of Monthly Subscription</p>
        <p className="mb-4">If you choose to downgrade from an annual to a monthly subscription, the monthly plan will commence only after the completion of the current annual cycle.</p>
        
        <h2 className="text-lg font-bold mb-2">Invoicing</h2>
        <p className="font-bold mb-2">Automatic Invoice</p>
        <p className="mb-4">An invoice will be automatically sent to your account email at the end of each billing cycle.</p>
        <p className="font-bold mb-2">Invoice Accessibility</p>
        <p className="mb-4">Invoices can be accessed under your account: Account Info &gt; Settings &gt; solo.Profile+ &gt; Billing History. Here, you can click to open the invoice in your browser.</p>

        <p className="text-muted-foreground mt-6 mb-4">Last modified: Dec. 2025</p>
      </main>
    </div>
  );
}
