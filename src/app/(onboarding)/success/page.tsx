"use client";

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SuccessPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full bg-[var(--color-moneta-ink)] text-[var(--color-moneta-cream)] p-8">
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="w-24 h-24 rounded-full bg-[var(--color-moneta-clay)] flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(217,162,92,0.3)]"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-moneta-ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5"/>
        </svg>
      </motion.div>

      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-heading text-center mb-4"
      >
        You're all set!
      </motion.h1>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-[var(--color-moneta-neutral-200)] mb-12"
      >
        Your accounts have been securely linked and your dashboard is ready.
      </motion.p>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: ready ? 1 : 0 }}
        transition={{ delay: 0.5 }}
        className="w-full mt-auto"
      >
        <Button 
          onClick={() => router.push('/')}
          disabled={!ready}
          className="w-full h-14 text-lg font-medium bg-[var(--color-moneta-cream)] text-[var(--color-moneta-ink)] hover:bg-[var(--color-moneta-neutral-100)] rounded-2xl shadow-lg"
        >
          Go to Dashboard
        </Button>
      </motion.div>

    </div>
  );
}
