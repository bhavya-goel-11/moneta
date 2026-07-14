"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to welcome after 2 seconds
    const timer = setTimeout(() => {
      router.push('/welcome');
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-background h-full">
      <div className="relative flex items-center justify-center mb-4">
        <div className="absolute w-24 h-24 rounded-full bg-[var(--color-moneta-clay)] animate-pulse-ring opacity-30"></div>
        <div className="relative z-10 w-16 h-16 rounded-full bg-[var(--color-moneta-ink)] flex items-center justify-center overflow-hidden">
          <Image src="/moneta-logo.svg" alt="Moneta Logo" width={64} height={64} className="object-cover w-full h-full" />
        </div>
      </div>
      <h1 className="text-4xl font-heading tracking-tight">Moneta</h1>
    </div>
  );
}
