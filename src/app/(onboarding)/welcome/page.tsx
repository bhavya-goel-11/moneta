"use client";

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function WelcomePage() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col h-full bg-[var(--color-moneta-ink)] text-[var(--color-moneta-cream)]">
      <div className="flex-1 flex flex-col justify-center px-8 relative">
        {/* Abstract background decorative elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-[var(--color-moneta-clay)] rounded-full blur-[100px] opacity-10"></div>
        <div className="absolute bottom-40 left-0 w-48 h-48 bg-[var(--color-moneta-sage)] rounded-full blur-[80px] opacity-10"></div>
        
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-full bg-[var(--color-moneta-ink-2)] flex items-center justify-center mb-8 border border-[var(--color-moneta-neutral-400)] overflow-hidden">
             <Image src="/moneta-logo.svg" alt="Moneta Logo" width={48} height={48} className="object-cover w-full h-full" />
          </div>
          <h1 className="text-5xl font-heading leading-tight mb-4 tracking-tight">
            Your financial life,<br />
            <span className="text-[var(--color-moneta-clay)]">orchestrated.</span>
          </h1>
          <p className="text-lg text-[var(--color-moneta-neutral-200)] mt-6 font-sans">
            One app for banking, cards, investments, and loans. Navigable by hand or by voice.
          </p>
        </div>
      </div>
      
      <div className="p-8 pb-12 flex flex-col gap-4 relative z-10">
        <Button 
          className="w-full h-14 text-lg font-medium bg-[var(--color-moneta-clay)] text-[var(--color-moneta-ink)] hover:bg-[var(--color-moneta-clay)]/90 rounded-2xl shadow-lg"
          onClick={() => router.push('/phone')}
        >
          Get started
        </Button>
        <Button 
          variant="ghost" 
          className="w-full h-12 text-[var(--color-moneta-neutral-200)] hover:bg-transparent hover:text-[var(--color-moneta-cream)]"
          onClick={() => router.push('/phone')}
        >
          I already have an account
        </Button>
      </div>
    </div>
  );
}
