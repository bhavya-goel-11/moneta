"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { ThemeToggle } from '@/components/theme-toggle';
import { 
  ScanLine, 
  Smartphone, 
  LineChart, 
  ReceiptText, 
  UsersRound, 
  TrendingUp,
  X,
  Sparkles,
  ArrowRight,
  Wallet,
  Car,
  ShieldCheck,
  Gauge,
  Landmark,
  ChevronDown,
  ChevronUp,
  HandCoins,
  Plane
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const [insights, setInsights] = useState([
    {
      id: 1,
      icon: <Sparkles className="w-5 h-5 text-moneta-clay" />,
      text: "Your Netflix (₹649) and a duplicate music subscription both charged this week — review subscriptions?",
      action: "Review"
    },
    {
      id: 2,
      icon: <Wallet className="w-5 h-5 text-moneta-clay" />,
      text: "You're ₹18,000 under your monthly budget with 6 days left. Move it to your SIP?",
      action: "Invest"
    },
    {
      id: 3,
      icon: <Car className="w-5 h-5 text-moneta-clay" />,
      text: "Your car insurance renews in 9 days — we found a better quote, ₹2,100 cheaper.",
      id: 3,
      icon: <Car className="w-5 h-5 text-moneta-clay" />,
      text: "Your car insurance renews in 9 days — we found a better quote, ₹2,100 cheaper.",
      action: "View Quotes"
    }
  ]);
  const [showAllActions, setShowAllActions] = useState(false);

  const quickActions = [
    { id: 'pay', label: 'Pay', icon: ScanLine, href: '#' },
    { id: 'recharge', label: 'Recharge', icon: Smartphone, href: '#' },
    { id: 'bills', label: 'Bills', icon: ReceiptText, href: '#' },
    { id: 'insurance', label: 'Insurance', icon: ShieldCheck, href: '/insurance' },
    { id: 'credit', label: 'Score', icon: Gauge, href: '/credit' },
    { id: 'taxes', label: 'Taxes', icon: Landmark, href: '/tax' },
    { id: 'split', label: 'Split', icon: UsersRound, href: '#' },
    { id: 'invest', label: 'Invest', icon: LineChart, href: '/invest' },
    { id: 'loans', label: 'Loans', icon: HandCoins, href: '#' },
    { id: 'flights', label: 'Flights', icon: Plane, href: '#' },
  ];

  const transactions = [
    { id: 1, merchant: "Swiggy", category: "Food", amount: -420, time: "2h ago", initial: "S", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
    { id: 2, merchant: "Ramesh (Landlord)", category: "Rent", amount: -28500, time: "Yesterday", initial: "R", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
    { id: 3, merchant: "Salary - ICICI", category: "Income", amount: 142150, time: "Yesterday", initial: "I", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
    { id: 4, merchant: "Amazon India", category: "Shopping", amount: -1240, time: "24 Oct", initial: "A", color: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300" },
    { id: 5, merchant: "Uber", category: "Travel", amount: -350, time: "23 Oct", initial: "U", color: "bg-black text-white dark:bg-white dark:text-black" },
    { id: 6, merchant: "Zomato", category: "Food", amount: -680, time: "22 Oct", initial: "Z", color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-full bg-background p-6 space-y-8">
        <div className="space-y-2 mt-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-6 w-32" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-10 w-48" />
        </div>
        <div className="flex gap-3 overflow-hidden">
          <Skeleton className="h-20 w-28 shrink-0 rounded-2xl" />
          <Skeleton className="h-20 w-28 shrink-0 rounded-2xl" />
          <Skeleton className="h-20 w-28 shrink-0 rounded-2xl" />
          <Skeleton className="h-20 w-28 shrink-0 rounded-2xl" />
        </div>
        <Skeleton className="h-48 w-full rounded-3xl" />
        <Skeleton className="h-32 w-full rounded-2xl" />
        <Skeleton className="h-48 w-full rounded-2xl" />
      </div>
    );
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col min-h-full bg-background pb-6"
    >
      {/* Top Section */}
      <motion.div variants={item} className="px-6 pt-8 pb-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-moneta-neutral-400 dark:text-moneta-neutral-200 text-sm">Good evening,</p>
            <p className="text-xl font-medium text-foreground">Aditya</p>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <motion.div whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-full bg-moneta-clay flex items-center justify-center text-moneta-ink font-semibold shadow-sm cursor-pointer">
              AR
            </motion.div>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-moneta-neutral-400 dark:text-moneta-neutral-200 text-sm mb-1">Total Net Worth</p>
          <div className="flex items-baseline gap-3">
            <h1 className="text-4xl font-heading text-foreground tabular-nums tracking-tight">₹11,94,250</h1>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center text-moneta-signal-green bg-moneta-signal-green/10 px-2 py-0.5 rounded text-xs font-medium tabular-nums">
              <TrendingUp className="w-3 h-3 mr-1" />
              +₹12,400 this month
            </div>
            {/* Sparkline placeholder */}
            <svg className="w-16 h-5 stroke-moneta-signal-green fill-none" viewBox="0 0 64 16">
              <path d="M0 12 L10 10 L20 14 L30 8 L40 10 L50 4 L64 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Account Pills */}
        <div className="overflow-x-auto pb-2 -mx-6 px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex gap-3 w-max mx-auto after:content-[''] after:w-2 after:shrink-0">
            <motion.div whileTap={{ scale: 0.95 }} className="flex-shrink-0 bg-moneta-neutral-100 dark:bg-moneta-neutral-500 px-4 py-3 rounded-2xl min-w-[110px]">
              <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">Bank Balance</p>
              <p className="font-medium tabular-nums text-foreground">₹2,26,470</p>
            </motion.div>
            <Link href="/invest" className="block">
              <motion.div whileTap={{ scale: 0.95 }} className="flex-shrink-0 bg-moneta-neutral-100 dark:bg-moneta-neutral-500 px-4 py-3 rounded-2xl min-w-[110px] h-full hover:bg-moneta-neutral-200 dark:hover:bg-moneta-neutral-400 transition-colors">
                <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">Investments</p>
                <p className="font-medium tabular-nums text-foreground">₹9,82,000</p>
              </motion.div>
            </Link>
            <Link href="/cards" className="block">
              <motion.div whileTap={{ scale: 0.95 }} className="flex-shrink-0 bg-moneta-neutral-100 dark:bg-moneta-neutral-500 px-4 py-3 rounded-2xl min-w-[110px] h-full hover:bg-moneta-neutral-200 dark:hover:bg-moneta-neutral-400 transition-colors">
                <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">Credit Cards</p>
                <p className="font-medium tabular-nums text-moneta-signal-red">-₹14,220</p>
              </motion.div>
            </Link>
            <Link href="/insurance" className="block">
              <motion.div whileTap={{ scale: 0.95 }} className="flex-shrink-0 bg-moneta-neutral-100 dark:bg-moneta-neutral-500 px-4 py-3 rounded-2xl min-w-[110px] h-full hover:bg-moneta-neutral-200 dark:hover:bg-moneta-neutral-400 transition-colors">
                <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">Insurance Cover</p>
                <p className="font-medium tabular-nums text-foreground">₹1.1Cr</p>
              </motion.div>
            </Link>
            <Link href="/credit" className="block">
              <motion.div whileTap={{ scale: 0.95 }} className="flex-shrink-0 bg-moneta-neutral-100 dark:bg-moneta-neutral-500 px-4 py-3 rounded-2xl min-w-[110px] h-full hover:bg-moneta-neutral-200 dark:hover:bg-moneta-neutral-400 transition-colors">
                <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">Credit Score</p>
                <p className="font-medium tabular-nums text-foreground">782 <span className="text-[10px] text-moneta-signal-green ml-1 font-medium bg-moneta-signal-green/10 px-1 py-0.5 rounded">Good</span></p>
              </motion.div>
            </Link>
            <Link href="/tax" className="block">
              <motion.div whileTap={{ scale: 0.95 }} className="flex-shrink-0 bg-moneta-neutral-100 dark:bg-moneta-neutral-500 px-4 py-3 rounded-2xl min-w-[110px] h-full hover:bg-moneta-neutral-200 dark:hover:bg-moneta-neutral-400 transition-colors">
                <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">Tax Planner</p>
                <p className="font-medium tabular-nums text-foreground">FY 26-27</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="px-6 py-2 space-y-8">
        
        {/* Quick Actions Grid */}
        <motion.div variants={item} className="bg-card border border-border rounded-3xl p-5 shadow-sm">
          <div className="grid grid-cols-4 gap-y-6">
            {(showAllActions ? quickActions : quickActions.slice(0, 7)).map((action) => (
              <Link href={action.href} key={action.id} className="flex flex-col items-center gap-2 group outline-none">
                <motion.div whileTap={{ scale: 0.9 }} className="w-12 h-12 bg-background shadow-sm rounded-2xl flex items-center justify-center border border-border group-hover:border-moneta-clay transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 bg-moneta-clay/0 group-hover:bg-moneta-clay/10 transition-colors"></div>
                  <action.icon className="w-5 h-5 text-foreground relative z-10" />
                </motion.div>
                <span className="text-[11px] font-medium text-moneta-neutral-400 dark:text-moneta-neutral-200">{action.label}</span>
              </Link>
            ))}
            
            <button 
              onClick={() => setShowAllActions(!showAllActions)}
              className="flex flex-col items-center gap-2 group outline-none"
            >
              <motion.div whileTap={{ scale: 0.9 }} className="w-12 h-12 bg-moneta-neutral-100 dark:bg-moneta-neutral-500 rounded-2xl flex items-center justify-center group-hover:bg-moneta-neutral-200 dark:group-hover:bg-moneta-neutral-400 transition-colors">
                {showAllActions ? (
                  <ChevronUp className="w-5 h-5 text-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-foreground" />
                )}
              </motion.div>
              <span className="text-[11px] font-medium text-moneta-neutral-400 dark:text-moneta-neutral-200">
                {showAllActions ? 'Less' : 'More'}
              </span>
            </button>
          </div>
        </motion.div>

        {/* Attention Card */}
        {insights.length > 0 && (
          <motion.div variants={item}>
            <h2 className="text-[11px] font-semibold mb-3 text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider">Needs your attention</h2>
            <div className="space-y-3">
              {insights.map(insight => (
                <div key={insight.id} className="relative bg-card p-4 rounded-2xl shadow-sm border border-border overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-moneta-clay"></div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {insight.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-[13px] text-foreground leading-snug mb-3 pr-2">
                        {insight.text}
                      </p>
                      <div className="flex gap-4 items-center">
                        <motion.button whileTap={{ scale: 0.95 }} className="text-[13px] font-medium text-moneta-clay flex items-center hover:opacity-80 transition-opacity">
                          {insight.action} <ArrowRight className="w-3 h-3 ml-1" />
                        </motion.button>
                      </div>
                    </div>
                    <motion.button 
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setInsights(insights.filter(i => i.id !== insight.id))}
                      className="text-moneta-neutral-300 dark:text-moneta-neutral-400 hover:text-foreground flex-shrink-0 h-fit"
                    >
                      <X className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Recent Transactions */}
        <motion.div variants={item}>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-[11px] font-semibold text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider">Recent transactions</h2>
            <motion.button whileTap={{ scale: 0.95 }} className="text-[13px] font-medium text-moneta-clay hover:opacity-80 transition-opacity">See all</motion.button>
          </div>
          
          <div className="bg-card rounded-2xl p-2 shadow-sm border border-border">
            {transactions.map((tx, idx) => (
              <motion.div whileTap={{ scale: 0.98 }} key={tx.id} className={`flex items-center justify-between p-3 cursor-pointer ${idx !== transactions.length - 1 ? 'border-b border-border' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${tx.color}`}>
                    {tx.initial}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{tx.merchant}</p>
                    <p className="text-[11px] text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-0.5">{tx.category} • {tx.time}</p>
                  </div>
                </div>
                <div className={`text-sm font-medium tabular-nums ${tx.amount > 0 ? 'text-moneta-signal-green' : 'text-foreground'}`}>
                  {tx.amount > 0 ? '+' : '-'}₹{Math.abs(tx.amount).toLocaleString('en-IN')}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
