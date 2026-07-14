"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  Target, 
  TrendingUp, 
  TrendingDown, 
  ChevronRight, 
  Briefcase, 
  Coins, 
  Building, 
  LineChart, 
  PieChart,
  ArrowUpRight,
  ChevronLeft,
  Calendar,
  IndianRupee,
  Activity
} from 'lucide-react';

type TabType = 'overview' | 'mf' | 'stocks' | 'gold' | 'epf';

export default function InvestPage() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [selectedMf, setSelectedMf] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'mf', label: 'Mutual Funds' },
    { id: 'stocks', label: 'Stocks' },
    { id: 'gold', label: 'Gold' },
    { id: 'epf', label: 'EPF' }
  ];

  const mfs = [
    { id: 1, name: 'Parag Parikh Flexi Cap Fund', category: 'Flexi Cap', value: '₹3,42,000', invested: '₹2,50,000', xirr: '+18.4%', sipAmount: '₹15,000', nextSip: '5 Dec' },
    { id: 2, name: 'UTI Nifty 50 Index Fund', category: 'Large Cap', value: '₹1,85,400', invested: '₹1,40,000', xirr: '+14.2%', sipAmount: '₹10,000', nextSip: '2 Dec' },
    { id: 3, name: 'Quant Small Cap Fund', category: 'Small Cap', value: '₹1,24,600', invested: '₹75,000', xirr: '+32.1%', sipAmount: '₹5,000', nextSip: '10 Dec' }
  ];

  const stocks = [
    { symbol: 'RELIANCE', name: 'Reliance Industries', qty: 45, avg: '₹2,150', ltp: '₹2,845', value: '₹1,28,025', return: '+32.3%' },
    { symbol: 'HDFCBANK', name: 'HDFC Bank', qty: 120, avg: '₹1,580', ltp: '₹1,642', value: '₹1,97,040', return: '+3.9%' },
    { symbol: 'ITC', name: 'ITC Ltd.', qty: 300, avg: '₹210', ltp: '₹438', value: '₹1,31,400', return: '+108.5%' }
  ];

  const watchlist = [
    { symbol: 'TCS', price: '₹3,842.50', change: '+1.4%' },
    { symbol: 'INFY', price: '₹1,485.20', change: '-0.8%' },
    { symbol: 'TATAMOTORS', price: '₹842.10', change: '+2.1%' },
    { symbol: 'ZOMATO', price: '₹164.30', change: '+4.5%' }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Goal Card */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-400">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Goa Trip 🏖️</h3>
              <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-0.5">On track for March</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-heading text-lg text-foreground">₹85k</p>
            <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200">of ₹1.5L</p>
          </div>
        </div>
        <div className="w-full h-2 bg-moneta-neutral-100 dark:bg-moneta-neutral-500 rounded-full overflow-hidden">
          <div className="h-full bg-moneta-clay w-[56%] rounded-full"></div>
        </div>
      </div>

      {/* Allocation Donut */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider mb-6">Asset Allocation</h3>
        
        <div className="flex items-center justify-between gap-6">
          <div className="relative w-32 h-32 shrink-0">
            {/* Simple CSS Donut implementation using conic-gradient */}
            <div 
              className="w-full h-full rounded-full [--epf:#3B82F6] [--gold:var(--color-moneta-ink-2)] [--fd:var(--color-moneta-neutral-300)] dark:[--epf:#60A5FA] dark:[--gold:var(--color-moneta-neutral-400)]"
              style={{
                background: `conic-gradient(
                  var(--color-moneta-sage) 0% 45%,
                  var(--color-moneta-clay) 45% 75%,
                  var(--epf) 75% 90%,
                  var(--gold) 90% 95%,
                  var(--fd) 95% 100%
                )`
              }}
            ></div>
            <div className="absolute inset-4 bg-card rounded-full flex items-center justify-center">
              <div className="text-center">
                <p className="text-[10px] text-moneta-neutral-400 dark:text-moneta-neutral-200">Total</p>
                <p className="font-heading text-sm text-foreground tracking-tight">₹14.5L</p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm bg-moneta-sage"></div>
                <span className="text-foreground">Mutual Funds</span>
              </div>
              <span className="font-medium tabular-nums">45%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm bg-moneta-clay"></div>
                <span className="text-foreground">Stocks</span>
              </div>
              <span className="font-medium tabular-nums">30%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm bg-[#3B82F6] dark:bg-[#60A5FA]"></div>
                <span className="text-foreground">EPF</span>
              </div>
              <span className="font-medium tabular-nums">15%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm bg-moneta-ink-2 dark:bg-moneta-neutral-400"></div>
                <span className="text-foreground">Gold</span>
              </div>
              <span className="font-medium tabular-nums">5%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm bg-moneta-neutral-300"></div>
                <span className="text-foreground">Fixed Dep.</span>
              </div>
              <span className="font-medium tabular-nums">5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMutualFunds = () => (
    <div className="space-y-4 pb-20">
      {mfs.map(mf => (
        <motion.div 
          whileTap={{ scale: 0.98 }}
          key={mf.id} 
          onClick={() => setSelectedMf(mf)}
          className="bg-card border border-border rounded-2xl p-5 shadow-sm cursor-pointer hover:border-moneta-clay/50 transition-colors group"
        >
          <div className="flex justify-between items-start mb-3">
            <div className="pr-4">
              <h3 className="font-medium text-foreground leading-tight">{mf.name}</h3>
              <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-1">{mf.category}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-moneta-neutral-300 group-hover:text-moneta-clay transition-colors shrink-0" />
          </div>
          <div className="flex justify-between items-end pt-3 border-t border-border">
            <div>
              <p className="text-[10px] text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider mb-1">Current Value</p>
              <p className="font-heading text-lg tabular-nums text-foreground">{mf.value}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider mb-1">XIRR</p>
              <p className="font-medium tabular-nums text-moneta-signal-green flex items-center gap-1 justify-end">
                <TrendingUp className="w-3 h-3" /> {mf.xirr}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderStocks = () => (
    <div className="space-y-6 pb-20">
      <div className="space-y-4">
        {stocks.map(stock => (
          <div key={stock.symbol} className="bg-card border border-border rounded-2xl p-4 shadow-sm flex justify-between items-center">
            <div>
              <h3 className="font-medium text-foreground">{stock.symbol}</h3>
              <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-0.5">{stock.qty} shares • Avg {stock.avg}</p>
            </div>
            <div className="text-right">
              <p className="font-medium tabular-nums text-foreground">{stock.value}</p>
              <p className="text-xs font-medium tabular-nums text-moneta-signal-green mt-0.5">{stock.return}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider mb-4 px-2">Watchlist</h3>
        <div className="bg-card border border-border rounded-2xl overflow-hidden divide-y divide-border">
          {watchlist.map(item => {
            const isPositive = item.change.startsWith('+');
            return (
              <div key={item.symbol} className="p-4 flex justify-between items-center hover:bg-moneta-neutral-100/50 dark:hover:bg-moneta-neutral-500/10 transition-colors">
                <p className="font-medium text-sm text-foreground">{item.symbol}</p>
                <div className="text-right">
                  <p className="text-sm font-medium tabular-nums text-foreground">{item.price}</p>
                  <p className={`text-[11px] font-medium tabular-nums mt-0.5 ${isPositive ? 'text-moneta-signal-green' : 'text-moneta-signal-red'}`}>
                    {item.change}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderGoldEPF = (type: 'gold' | 'epf') => {
    if (type === 'gold') {
      return (
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
              <Coins className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-medium text-lg text-foreground">Digital Gold</h3>
              <p className="text-sm text-moneta-neutral-400 dark:text-moneta-neutral-200">Safe haven asset</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-background rounded-xl p-4 border border-border">
              <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">Current Value</p>
              <p className="font-heading text-xl text-foreground">₹72,600</p>
            </div>
            <div className="bg-background rounded-xl p-4 border border-border">
              <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">Holdings</p>
              <p className="font-heading text-xl text-foreground">12.5g</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm p-4 bg-moneta-neutral-100 dark:bg-moneta-neutral-500 rounded-xl">
            <span className="text-moneta-neutral-400 dark:text-moneta-neutral-200">Current Rate (24K)</span>
            <span className="font-medium text-foreground">₹5,808 / g</span>
          </div>
        </div>
      );
    }
    
    return (
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-400">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-medium text-lg text-foreground">EPF Balance</h3>
            <p className="text-sm text-moneta-neutral-400 dark:text-moneta-neutral-200">UAN: 100984XXXXXX</p>
          </div>
        </div>
        
        <div className="bg-background rounded-xl p-5 border border-border mb-6 text-center">
          <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-2 uppercase tracking-wider">Total Corpus</p>
          <p className="font-heading text-4xl text-foreground tracking-tight">₹2,17,800</p>
          <p className="text-xs text-moneta-signal-green mt-2 font-medium bg-moneta-signal-green/10 inline-block px-2 py-1 rounded-md">8.15% current interest rate</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm border-b border-border pb-3">
            <span className="text-moneta-neutral-400 dark:text-moneta-neutral-200">Employee Share</span>
            <span className="font-medium tabular-nums text-foreground">₹1,52,460</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-moneta-neutral-400 dark:text-moneta-neutral-200">Employer Share</span>
            <span className="font-medium tabular-nums text-foreground">₹65,340</span>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="flex flex-col h-full bg-background relative pt-12 px-6">
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-10 w-48 mb-6" />
        <div className="flex gap-2 mb-6">
          <Skeleton className="h-10 w-20 rounded-full shrink-0" />
          <Skeleton className="h-10 w-24 rounded-full shrink-0" />
          <Skeleton className="h-10 w-20 rounded-full shrink-0" />
          <Skeleton className="h-10 w-20 rounded-full shrink-0" />
        </div>
        <div className="space-y-6">
          <Skeleton className="h-32 w-full rounded-2xl" />
          <Skeleton className="h-64 w-full rounded-2xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-background relative">
      {/* Header & Total */}
      <header className="px-6 pt-12 pb-6 bg-background z-20">
        <p className="text-sm font-semibold text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider mb-2">Total Investments</p>
        <div className="flex items-end gap-3 mb-6">
          <h1 className="font-heading text-4xl text-foreground tracking-tight">₹14,52,400</h1>
          <div className="flex items-center gap-1 text-sm font-medium text-moneta-signal-green bg-moneta-signal-green/10 px-2 py-1 rounded-md mb-1">
            <TrendingUp className="w-4 h-4" />
            +₹12,400 (0.86%)
          </div>
        </div>

        {/* Custom Segmented Control */}
        <div className="overflow-x-auto pb-2 -mx-6 px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex gap-2 w-max">
            {tabs.map(tab => (
              <motion.button
                whileTap={{ scale: 0.95 }}
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap outline-none ${
                  activeTab === tab.id 
                    ? 'bg-moneta-ink text-moneta-cream dark:bg-moneta-cream dark:text-moneta-ink' 
                    : 'bg-moneta-neutral-100 dark:bg-moneta-neutral-500 text-moneta-neutral-400 dark:text-moneta-neutral-200 hover:text-foreground'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-6 pt-2 pb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'mf' && renderMutualFunds()}
            {activeTab === 'stocks' && renderStocks()}
            {activeTab === 'gold' && renderGoldEPF('gold')}
            {activeTab === 'epf' && renderGoldEPF('epf')}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* MF Detail Sheet */}
      <AnimatePresence>
        {selectedMf && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedMf(null)}
            />
            
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-background w-full sm:w-[400px] h-[85vh] sm:h-auto sm:max-h-[85vh] rounded-t-[32px] sm:rounded-[32px] overflow-hidden flex flex-col"
            >
              <div className="flex items-center p-4 border-b border-border">
                <motion.button whileTap={{ scale: 0.9 }} onClick={() => setSelectedMf(null)} className="w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-moneta-neutral-100 dark:hover:bg-moneta-neutral-500 transition-colors">
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <h3 className="font-medium text-foreground ml-2 truncate pr-4">{selectedMf.name}</h3>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div>
                  <p className="text-sm text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">Current Value</p>
                  <p className="font-heading text-4xl tabular-nums text-foreground tracking-tight mb-2">{selectedMf.value}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-moneta-neutral-400 dark:text-moneta-neutral-200">Invested: <span className="font-medium text-foreground tabular-nums">{selectedMf.invested}</span></span>
                    <span className="text-moneta-signal-green font-medium flex items-center gap-1"><ArrowUpRight className="w-4 h-4" /> {selectedMf.xirr} XIRR</span>
                  </div>
                </div>

                {/* Mock Chart Area */}
                <div className="h-48 bg-card border border-border rounded-2xl p-4 flex flex-col justify-end relative overflow-hidden">
                  <div className="absolute top-4 left-4 flex gap-2 text-xs">
                    <span className="bg-moneta-neutral-100 dark:bg-moneta-neutral-500 px-2 py-1 rounded">1M</span>
                    <span className="bg-moneta-neutral-100 dark:bg-moneta-neutral-500 px-2 py-1 rounded">6M</span>
                    <span className="bg-moneta-clay text-moneta-ink font-medium px-2 py-1 rounded">1Y</span>
                    <span className="bg-moneta-neutral-100 dark:bg-moneta-neutral-500 px-2 py-1 rounded">3Y</span>
                  </div>
                  {/* Fake SVG Sparkline */}
                  <svg viewBox="0 0 100 40" className="w-full h-24 stroke-moneta-clay fill-none drop-shadow-sm" preserveAspectRatio="none">
                    <path d="M0,40 L10,35 L20,38 L30,25 L40,28 L50,15 L60,20 L70,10 L80,12 L90,2 L100,0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0,40 L10,35 L20,38 L30,25 L40,28 L50,15 L60,20 L70,10 L80,12 L90,2 L100,0 L100,50 L0,50 Z" stroke="none" fill="url(#gradient)" opacity="0.2"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-moneta-clay)" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
                  <h4 className="text-sm font-medium text-foreground flex items-center gap-2"><Activity className="w-4 h-4 text-moneta-clay" /> Active SIP</h4>
                  <div className="flex justify-between items-center text-sm border-b border-border pb-3">
                    <span className="text-moneta-neutral-400 dark:text-moneta-neutral-200">Amount</span>
                    <span className="font-medium text-foreground tabular-nums">{selectedMf.sipAmount} / mo</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-moneta-neutral-400 dark:text-moneta-neutral-200">Next Installment</span>
                    <span className="font-medium text-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-moneta-neutral-300" />
                      {selectedMf.nextSip}
                    </span>
                  </div>
                </div>

              </div>

              <div className="p-6 border-t border-border bg-background grid grid-cols-2 gap-3">
                <motion.button whileTap={{ scale: 0.95 }} className="bg-moneta-neutral-100 dark:bg-moneta-neutral-500 text-foreground py-4 rounded-xl font-medium hover:bg-moneta-neutral-200 transition-colors">
                  Sell
                </motion.button>
                <motion.button whileTap={{ scale: 0.95 }} className="bg-moneta-clay text-moneta-ink py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-moneta-clay/90 transition-colors">
                  Invest More <IndianRupee className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
