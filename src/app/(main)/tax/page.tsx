"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  CheckCircle2, 
  Circle,
  FileText,
  Briefcase,
  ChevronRight,
  ArrowRight,
  UserCheck,
  X
} from 'lucide-react';

export default function TaxPage() {
  const [activeRegime, setActiveRegime] = useState<'old' | 'new'>('old');
  const [showFileModal, setShowFileModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const checklist = [
    { code: '80C', title: 'ELSS & EPF', used: '₹1,50,000 / ₹1.5L max', checked: true },
    { code: '80D', title: 'Health Insurance', used: '₹12,450 / ₹25k max', checked: true, note: 'From HDFC Ergo policy' },
    { code: '80CCD(1B)', title: 'NPS', used: '₹50,000 / ₹50k max', checked: true },
    { code: '24(b)', title: 'Home Loan Interest', used: '₹0 / ₹2L max', checked: false },
    { code: '80E', title: 'Education Loan', used: '₹0 / No limit', checked: false },
    { code: '80TTA', title: 'Savings Interest', used: '₹3,400 / ₹10k max', checked: false }
  ];

  const renderComparison = () => {
    const isOldBetter = activeRegime === 'old';
    
    return (
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        {/* Toggle Head */}
        <div className="bg-moneta-neutral-100 dark:bg-moneta-neutral-500 p-1 m-4 rounded-xl flex relative">
          <div 
            className={`absolute inset-y-1 w-[calc(50%-4px)] bg-background rounded-lg shadow-sm transition-all duration-300 ease-in-out ${activeRegime === 'new' ? 'left-[calc(50%+2px)]' : 'left-1'}`}
          />
          <button 
            onClick={() => setActiveRegime('old')}
            className={`flex-1 py-2 text-sm font-medium relative z-10 transition-colors ${activeRegime === 'old' ? 'text-foreground' : 'text-moneta-neutral-400 dark:text-moneta-neutral-200'}`}
          >
            Old Regime
          </button>
          <button 
            onClick={() => setActiveRegime('new')}
            className={`flex-1 py-2 text-sm font-medium relative z-10 transition-colors ${activeRegime === 'new' ? 'text-foreground' : 'text-moneta-neutral-400 dark:text-moneta-neutral-200'}`}
          >
            New Regime
          </button>
        </div>

        <div className="px-6 pb-6 pt-2">
          <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1 uppercase tracking-wider">Estimated Tax Payable</p>
          <div className="flex items-end justify-between mb-6">
            <h3 className="font-heading text-4xl tabular-nums tracking-tight text-foreground">
              {activeRegime === 'old' ? '₹1,42,500' : '₹1,65,000'}
            </h3>
            {isOldBetter && activeRegime === 'old' && (
              <div className="bg-moneta-signal-green/10 text-moneta-signal-green px-2 py-1 rounded text-xs font-medium mb-1">
                Saves ₹22,500
              </div>
            )}
            {!isOldBetter && activeRegime === 'new' && (
              <div className="bg-moneta-signal-red/10 text-moneta-signal-red px-2 py-1 rounded text-xs font-medium mb-1">
                You lose ₹22,500
              </div>
            )}
          </div>

          <div className="space-y-3 pt-4 border-t border-border">
            <div className="flex justify-between text-sm">
              <span className="text-moneta-neutral-400 dark:text-moneta-neutral-200">Gross Income</span>
              <span className="font-medium text-foreground">₹24,00,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-moneta-neutral-400 dark:text-moneta-neutral-200">Total Deductions</span>
              <span className="font-medium text-foreground">{activeRegime === 'old' ? '- ₹2,62,450' : '- ₹75,000 (Std)'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-moneta-neutral-400 dark:text-moneta-neutral-200">Taxable Income</span>
              <span className="font-medium text-foreground">{activeRegime === 'old' ? '₹21,37,550' : '₹23,25,000'}</span>
            </div>
          </div>
        </div>
        
        {activeRegime === 'old' && (
          <div className="bg-moneta-clay/10 p-4 border-t border-moneta-clay/20 flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-moneta-clay shrink-0" />
            <p className="text-sm text-moneta-ink dark:text-moneta-cream leading-snug">
              Because you fully utilized 80C and NPS, the Old Regime is better for you.
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-background relative">
      <header className="px-6 pt-12 pb-6 sticky top-0 z-10 bg-background/90 backdrop-blur-md">
        <h1 className="font-heading text-3xl text-foreground">Taxes</h1>
      </header>

      {isLoading ? (
        <div className="flex-1 px-6 space-y-8 pt-2">
          <div className="space-y-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-48 w-full rounded-2xl" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-64 w-full rounded-2xl" />
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-6 space-y-8 pb-24">
          
          <section>
          <h2 className="text-sm font-semibold text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider mb-4">FY 2026-27 Planner</h2>
          {renderComparison()}
        </section>

        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-sm font-semibold text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider">Tax-saving checklist</h2>
            <span className="text-xs font-medium text-moneta-clay bg-moneta-clay/10 px-2 py-1 rounded">3 of 6 used</span>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-2 shadow-sm divide-y divide-border">
            {checklist.map((item, i) => (
              <motion.div whileTap={{ scale: 0.98 }} key={i} className="p-4 flex gap-4 hover:bg-moneta-neutral-100/50 dark:hover:bg-moneta-neutral-500/10 transition-colors cursor-pointer group">
                <div className="mt-0.5">
                  {item.checked ? (
                    <CheckCircle2 className="w-5 h-5 text-moneta-signal-green" />
                  ) : (
                    <Circle className="w-5 h-5 text-moneta-neutral-300 group-hover:text-moneta-clay transition-colors" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className={`font-medium text-sm ${item.checked ? 'text-foreground' : 'text-moneta-neutral-400 dark:text-moneta-neutral-200'}`}>
                      {item.title} <span className="text-xs font-normal text-moneta-neutral-400 dark:text-moneta-neutral-200 ml-1">({item.code})</span>
                    </p>
                  </div>
                  <p className="text-xs text-foreground font-medium">{item.used}</p>
                  {item.note && (
                    <p className="text-[10px] text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-1 flex items-center gap-1">
                      <ArrowRight className="w-3 h-3" /> Auto-synced from Insurance
                    </p>
                  )}
                </div>
                <ChevronRight className="w-4 h-4 text-moneta-neutral-300 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </section>

      </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background to-transparent pointer-events-none z-20">
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowFileModal(true)}
          className="w-full pointer-events-auto bg-moneta-ink dark:bg-moneta-cream text-moneta-cream dark:text-moneta-ink py-4 rounded-xl font-medium shadow-lg hover:opacity-90 transition-opacity"
        >
          File your ITR
        </motion.button>
      </div>

      {/* File ITR Choice Modal */}
      <AnimatePresence>
        {showFileModal && (
          <div className="fixed inset-0 z-[60] flex items-end justify-center p-0">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowFileModal(false)}
            />
            
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-background w-full sm:w-[400px] pb-8 pt-2 px-4 rounded-t-[32px] sm:rounded-[32px] sm:mb-4 overflow-hidden flex flex-col"
            >
              <div className="w-12 h-1.5 bg-moneta-neutral-200 rounded-full mx-auto mb-6"></div>
              
              <div className="flex justify-between items-center mb-6 px-2">
                <h3 className="font-heading text-xl text-foreground">How would you like to file?</h3>
                <button onClick={() => setShowFileModal(false)} className="w-8 h-8 rounded-full bg-moneta-neutral-100 dark:bg-moneta-neutral-500 flex items-center justify-center text-foreground">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 px-2">
                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowFileModal(false)}
                  className="w-full bg-card border-2 border-moneta-clay rounded-2xl p-5 flex items-start gap-4 hover:bg-moneta-clay/5 transition-colors text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-moneta-clay/20 flex items-center justify-center shrink-0">
                    <UserCheck className="w-6 h-6 text-moneta-clay" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-lg mb-1">Connect with a CA</h4>
                    <p className="text-sm text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-2">We'll pair you with a vetted expert to handle everything. Ideal for capital gains.</p>
                    <span className="text-xs font-semibold text-moneta-ink dark:text-moneta-cream bg-moneta-clay/20 px-2 py-1 rounded">Starts at ₹1,499</span>
                  </div>
                </motion.button>

                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowFileModal(false)}
                  className="w-full bg-card border border-border rounded-2xl p-5 flex items-start gap-4 hover:bg-moneta-neutral-100/50 dark:hover:bg-moneta-neutral-500/10 transition-colors text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-moneta-neutral-100 dark:bg-moneta-neutral-500 flex items-center justify-center shrink-0 text-foreground">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-lg mb-1">File it yourself</h4>
                    <p className="text-sm text-moneta-neutral-400 dark:text-moneta-neutral-200">Connect to the IT portal and auto-fill your details. Free filing for salaried individuals.</p>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
