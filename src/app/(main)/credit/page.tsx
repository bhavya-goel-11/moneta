"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  CheckCircle2, 
  AlertCircle, 
  AlertTriangle,
  ChevronRight,
  TrendingUp,
  RefreshCw
} from 'lucide-react';

export default function CreditScorePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingScore, setIsFetchingScore] = useState(false);
  const [scoreLastFetched, setScoreLastFetched] = useState('24 Oct, 10:15 AM');

  const handleFetchScore = () => {
    setIsFetchingScore(true);
    setTimeout(() => {
      setIsFetchingScore(false);
      const now = new Date();
      setScoreLastFetched(`Today, ${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`);
    }, 1500);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const factors = [
    { label: 'Payment history', val: '100%', status: 'Good', impact: 'High impact', icon: <CheckCircle2 className="w-4 h-4 text-moneta-signal-green" /> },
    { label: 'Credit utilisation', val: '12%', status: 'Good', impact: 'High impact', icon: <CheckCircle2 className="w-4 h-4 text-moneta-signal-green" /> },
    { label: 'Credit age', val: '4 yrs 2 mos', status: 'Fair', impact: 'Medium impact', icon: <AlertCircle className="w-4 h-4 text-yellow-500" /> },
    { label: 'Recent enquiries', val: '2', status: 'Needs attention', impact: 'Low impact', icon: <AlertTriangle className="w-4 h-4 text-moneta-signal-red" /> }
  ];

  const preApproved = [
    { id: 1, bank: 'Axis Bank', type: 'Personal Loan', limit: '₹8,00,000', rate: '11.5% p.a.' },
    { id: 2, bank: 'HDFC Bank', type: 'Credit Card Upgrade', limit: 'Regalia Gold', rate: 'LTF' }
  ];

  return (
    <div className="flex flex-col h-full bg-background relative">
      <header className="px-6 pt-12 pb-6 sticky top-0 z-10 bg-background/90 backdrop-blur-md">
        <h1 className="font-heading text-3xl text-foreground">Credit Score</h1>
      </header>

      {isLoading ? (
        <div className="flex-1 px-6 space-y-8 pt-2">
          <div className="flex flex-col items-center justify-center p-8 border border-border rounded-2xl">
            <Skeleton className="h-4 w-24 mb-8" />
            <Skeleton className="h-40 w-48 rounded-t-full rounded-b-none mb-6" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-40 w-full rounded-2xl" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-48 w-full rounded-2xl" />
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-6 space-y-8">
          
          {/* Score Gauge */}
        <section className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-sm">
          <h2 className="text-sm font-semibold text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider mb-8">Experian</h2>
          
          <div className="relative w-48 h-24 overflow-hidden mb-6">
            {/* SVG Half Circle Gauge */}
            <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-md">
              <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="var(--color-moneta-neutral-200)" strokeWidth="8" strokeLinecap="round" />
              {/* Highlighted stroke (80% of 180 degrees) */}
              <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="var(--color-moneta-signal-green)" strokeWidth="8" strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset="25.12" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
              <h3 className="font-heading text-5xl text-foreground tracking-tight">782</h3>
            </div>
          </div>
          
          <div className="bg-moneta-signal-green/10 text-moneta-signal-green px-3 py-1 rounded-full text-sm font-medium">
            Excellent
          </div>
          
          <div className="w-full mt-6 pt-4 border-t border-border flex items-center justify-between">
            <p className="text-[11px] text-moneta-neutral-400 dark:text-moneta-neutral-200">Last fetched: {scoreLastFetched}</p>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={handleFetchScore}
              disabled={isFetchingScore}
              className="flex items-center gap-1.5 text-xs font-medium text-moneta-clay hover:opacity-80 transition-opacity disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isFetchingScore ? 'animate-spin' : ''}`} />
              {isFetchingScore ? 'Fetching...' : 'Fetch Latest'}
            </motion.button>
          </div>
        </section>

        {/* 6-Month Trend */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-sm font-semibold text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider">Score Trend</h2>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 h-40 relative shadow-sm flex flex-col justify-end">
            <div className="absolute top-4 left-4 flex items-center gap-2 text-sm text-moneta-signal-green font-medium">
              <TrendingUp className="w-4 h-4" /> +14 pts (6M)
            </div>
            
            {/* Fake line chart */}
            <svg viewBox="0 0 100 40" className="w-full h-24 stroke-moneta-clay fill-none" preserveAspectRatio="none">
              <path d="M0,35 L20,30 L40,32 L60,25 L80,15 L100,10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M0,35 L20,30 L40,32 L60,25 L80,15 L100,10 L100,50 L0,50 Z" stroke="none" fill="url(#trend-gradient)" opacity="0.15"/>
              <defs>
                <linearGradient id="trend-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-moneta-clay)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
            
            <div className="flex justify-between text-[10px] text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-2">
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
            </div>
          </div>
        </section>

        {/* Factors Breakdown */}
        <section>
          <h2 className="text-sm font-semibold text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider mb-4">What's affecting your score</h2>
          <div className="bg-card border border-border rounded-2xl p-2 shadow-sm divide-y divide-border">
            {factors.map((factor, i) => (
              <div key={i} className="p-4 flex justify-between items-center hover:bg-moneta-neutral-100/50 dark:hover:bg-moneta-neutral-500/10 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">{factor.icon}</div>
                  <div>
                    <p className="font-medium text-sm text-foreground">{factor.label}</p>
                    <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-0.5">{factor.impact}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">{factor.val}</p>
                  <p className={`text-[11px] font-medium mt-0.5 ${
                    factor.status === 'Good' ? 'text-moneta-signal-green' : 
                    factor.status === 'Fair' ? 'text-yellow-600 dark:text-yellow-500' : 'text-moneta-signal-red'
                  }`}>
                    {factor.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pre-approved loans */}
        <section>
          <h2 className="text-sm font-semibold text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider mb-4">Because you have 782</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {preApproved.map(offer => (
              <motion.div whileTap={{ scale: 0.98 }} key={offer.id} className="w-[260px] shrink-0 bg-moneta-ink text-moneta-cream rounded-2xl p-5 relative overflow-hidden group hover:opacity-95 cursor-pointer">
                <div className="bg-moneta-clay text-moneta-ink text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide inline-block mb-3">
                  Pre-approved
                </div>
                <p className="text-xs text-moneta-neutral-300 mb-1">{offer.bank}</p>
                <h3 className="font-medium text-lg mb-4">{offer.type}</h3>
                
                <div className="flex justify-between items-end border-t border-moneta-neutral-500/30 pt-4 mt-2">
                  <div>
                    <p className="text-[10px] text-moneta-neutral-300 uppercase tracking-wider mb-1">Up to</p>
                    <p className="font-medium text-xl">{offer.limit}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-moneta-clay text-sm">{offer.rate}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
      )}
    </div>
  );
}
