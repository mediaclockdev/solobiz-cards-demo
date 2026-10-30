import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold font-headline">{title}</h1>
          <p className="text-muted-foreground max-w-md mx-auto">{description}</p>
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go back home
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
