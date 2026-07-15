"use client";

import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  CreditCard, 
  Plane, 
  ShoppingBag, 
  Utensils, 
  ArrowRight, 
  ChevronRight,
  TrendingUp,
  Tag,
  CheckCircle2,
  X,
  Sparkles,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CardsPage() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applyStep, setApplyStep] = useState(1); // 1: details, 2: KYC, 3: success
  const [loanAmount, setLoanAmount] = useState(500000);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const myCards = [
    {
      id: 'regalia',
      name: 'HDFC Regalia',
      network: 'Visa',
      number: '•••• 4471',
      color: 'bg-gradient-to-br from-[#0F2925] to-[#1a4a42]', // Moneta Ink based
      bill: '₹14,220',
      due: '15 Nov',
      points: '12,450 pts'
    },
    {
      id: 'ace',
      name: 'Axis Ace',
      network: 'Mastercard',
      number: '•••• 8201',
      color: 'bg-gradient-to-br from-gray-800 to-gray-900',
      bill: '₹0',
      due: 'Paid',
      points: '₹4,120 cashback'
    },
    {
      id: 'amazon',
      name: 'Amazon Pay ICICI',
      network: 'Visa',
      number: '•••• 1928',
      color: 'bg-gradient-to-br from-[#232F3E] to-[#131A22]',
      bill: '₹2,100',
      due: '20 Nov',
      points: '₹1,250 CB'
    }
  ];

  const smartRecommendations = [
    {
      category: 'Travel & Flights',
      icon: <Plane className="w-5 h-5 text-blue-500" />,
      bestCard: 'HDFC Regalia',
      why: '5X Reward Points on travel bookings'
    },
    {
      category: 'Online Shopping',
      icon: <ShoppingBag className="w-5 h-5 text-orange-500" />,
      bestCard: 'Amazon Pay ICICI',
      why: '5% unlimited cashback on Amazon'
    },
    {
      category: 'Dining Out',
      icon: <Utensils className="w-5 h-5 text-red-500" />,
      bestCard: 'Axis Ace',
      why: '4% flat cashback on Zomato/Swiggy'
    }
  ];

  const offers = [
    {
      id: 'myntra',
      brand: 'Myntra',
      title: '10% off up to ₹1,500',
      subtitle: 'On your HDFC Regalia card',
      icon: <Tag className="w-6 h-6 text-pink-500" />,
      matchReason: 'You spent ₹8,200 on apparel last month.',
      isApplyFlow: false
    },
    {
      id: 'loan',
      brand: 'Axis Bank',
      title: 'Pre-approved Personal Loan',
      subtitle: 'Up to ₹8,00,000 at 11.5% p.a.',
      icon: <TrendingUp className="w-6 h-6 text-moneta-clay" />,
      matchReason: 'You have a prime credit score (790) and consistent Axis Ace usage.',
      isApplyFlow: true
    },
    {
      id: 'amex',
      brand: 'American Express',
      title: 'Amex Platinum Travel',
      subtitle: 'Apply in 3 taps — 1st year free',
      icon: <Briefcase className="w-6 h-6 text-blue-400" />,
      matchReason: 'Your travel spend increased by 40% this year.',
      isApplyFlow: false
    }
  ];

  const startApplyFlow = () => {
    setApplyStep(1);
    setShowApplyModal(true);
  };

  const handleNextStep = () => {
    if (applyStep < 3) {
      setApplyStep(applyStep + 1);
    }
  };

  const closeApplyFlow = () => {
    setShowApplyModal(false);
    setTimeout(() => setApplyStep(1), 300); // Reset after animation
  };

  if (isLoading) {
    return (
      <div className="pb-6 px-6 space-y-8 pt-12">
        <Skeleton className="h-10 w-48 mb-6" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-24" />
          <div className="flex gap-4 overflow-hidden">
            <Skeleton className="h-[176px] w-[280px] shrink-0 rounded-2xl" />
            <Skeleton className="h-[176px] w-[280px] shrink-0 rounded-2xl" />
          </div>
          <Skeleton className="h-32 w-full rounded-2xl mt-2" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-32 w-full rounded-2xl" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-28 w-full rounded-2xl" />
          <Skeleton className="h-28 w-full rounded-2xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="pb-6">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 sticky top-0 z-10 bg-background/90 backdrop-blur-md">
        <h1 className="font-heading text-3xl text-foreground">Cards & Offers</h1>
      </header>

      {/* My Cards Section */}
      <section className="mb-10">
        <div className="px-6 mb-4 flex justify-between items-end">
          <h2 className="text-sm font-semibold text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider">My Cards</h2>
        </div>
        
        {/* Horizontal Carousel */}
        <div className="overflow-x-auto pt-2 pb-4 px-6 -mt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex gap-4 w-max">
            {myCards.map((card, idx) => (
              <div 
                key={card.id}
                onClick={() => setSelectedCard(idx)}
                className={`relative w-[280px] h-[176px] rounded-2xl p-5 flex flex-col justify-between cursor-pointer transition-transform ${
                  selectedCard === idx ? 'scale-100 ring-2 ring-moneta-clay ring-offset-2 ring-offset-background' : 'scale-[0.98] opacity-80 hover:opacity-100'
                } ${card.color}`}
              >
                {/* Card Top */}
                <div className="flex justify-between items-start text-white/90">
                  <p className="font-medium tracking-wide">{card.name}</p>
                  <p className="text-xs font-bold italic opacity-70">{card.network}</p>
                </div>
                
                {/* Card Bottom */}
                <div className="text-white">
                  <p className="text-xl tracking-[0.2em] font-medium mb-1 drop-shadow-sm">{card.number}</p>
                  <p className="text-xs text-white/70">Aditya Rao</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Card Details */}
        <div className="px-6 mt-2">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCard}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-card border border-border rounded-2xl p-5"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">Current Bill</p>
                  <p className="font-heading text-2xl tabular-nums text-foreground">{myCards[selectedCard].bill}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">Due Date</p>
                  <p className={`font-medium tabular-nums ${myCards[selectedCard].bill !== '₹0' ? 'text-moneta-signal-red' : 'text-foreground'}`}>
                    {myCards[selectedCard].due}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.button whileTap={{ scale: 0.95 }} className="flex-1 bg-moneta-clay text-moneta-ink font-medium py-3 rounded-xl hover:bg-moneta-clay/90 transition-colors">
                  Pay Bill
                </motion.button>
                <motion.button whileTap={{ scale: 0.95 }} className="flex-1 bg-moneta-neutral-100 dark:bg-moneta-neutral-500 text-foreground font-medium py-3 rounded-xl hover:bg-moneta-neutral-200 dark:hover:bg-moneta-neutral-400 transition-colors">
                  Details
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Smart Recommendations */}
      <section className="mb-10 px-6">
        <h2 className="text-sm font-semibold text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider mb-4">Best Card For What You're Buying</h2>
        <div className="bg-card border border-border rounded-2xl divide-y divide-border overflow-hidden">
          {smartRecommendations.map((rec, idx) => (
            <div key={idx} className="p-4 flex gap-4 items-start hover:bg-moneta-neutral-100/50 dark:hover:bg-moneta-neutral-500/10 transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-moneta-neutral-100 dark:bg-moneta-neutral-500 flex items-center justify-center shrink-0">
                {rec.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium text-foreground">{rec.category}</h3>
                  <span className="text-xs font-semibold text-moneta-clay bg-moneta-clay/10 px-2 py-0.5 rounded uppercase tracking-wide">Use</span>
                </div>
                <p className="text-sm font-medium text-foreground mb-1">{rec.bestCard}</p>
                <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200">{rec.why}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offers Marketplace */}
      <section className="px-6">
        <h2 className="text-sm font-semibold text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider mb-4">Curated For You</h2>
        <div className="space-y-4">
          {offers.map((offer) => (
            <motion.div whileTap={{ scale: 0.98 }} key={offer.id} className="bg-card border border-border rounded-2xl p-5 hover:border-moneta-clay/50 transition-colors group cursor-pointer" onClick={() => offer.isApplyFlow && startApplyFlow()}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-moneta-neutral-100 dark:bg-moneta-neutral-500 flex items-center justify-center">
                    {offer.icon}
                  </div>
                  <div>
                    <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-0.5">{offer.brand}</p>
                    <h3 className="font-medium text-foreground leading-tight">{offer.title}</h3>
                  </div>
                </div>
                {offer.isApplyFlow ? (
                  <div className="bg-moneta-clay text-moneta-ink text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap shrink-0 ml-3 mt-1">
                    Pre-approved
                  </div>
                ) : (
                  <ChevronRight className="w-5 h-5 text-moneta-neutral-300 group-hover:text-moneta-clay transition-colors" />
                )}
              </div>
              
              <div className="bg-moneta-neutral-100 dark:bg-moneta-neutral-500 rounded-xl p-3 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-moneta-clay shrink-0 mt-0.5" />
                <div>
                  <p className="text-[13px] font-medium text-foreground mb-0.5">{offer.subtitle}</p>
                  <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 leading-relaxed">
                    Matched because: {offer.matchReason}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Apply Flow Modal (Loan) */}
      <AnimatePresence>
        {showApplyModal && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeApplyFlow}
            />
            
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-background w-full sm:w-[400px] h-[85vh] sm:h-auto sm:max-h-[85vh] rounded-t-[32px] sm:rounded-[32px] overflow-hidden flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-border">
                <h3 className="font-heading text-xl text-foreground">Axis Bank Loan</h3>
                <motion.button whileTap={{ scale: 0.9 }} onClick={closeApplyFlow} className="w-8 h-8 rounded-full bg-moneta-neutral-100 dark:bg-moneta-neutral-500 flex items-center justify-center text-foreground hover:bg-moneta-neutral-200 transition-colors">
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <AnimatePresence mode="wait">
                  {applyStep === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground mb-4">Choose your amount</p>
                        <div className="bg-card border border-border rounded-2xl p-6 text-center mb-6">
                          <p className="text-moneta-neutral-400 dark:text-moneta-neutral-200 text-sm mb-2">Loan Amount</p>
                          <p className="text-4xl font-heading text-foreground tabular-nums mb-4">
                            ₹{loanAmount.toLocaleString('en-IN')}
                          </p>
                          <input 
                            type="range" 
                            min="50000" 
                            max="800000" 
                            step="10000"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                            className="w-full accent-moneta-clay h-2 bg-moneta-neutral-200 dark:bg-moneta-neutral-500 rounded-full appearance-none cursor-pointer"
                          />
                          <div className="flex justify-between text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-2">
                            <span>₹50k</span>
                            <span>₹8L</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="border border-moneta-clay bg-moneta-clay/5 rounded-xl p-4 cursor-pointer relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-moneta-clay text-moneta-ink text-[9px] font-bold px-2 py-0.5 rounded-bl-lg uppercase">Suggested</div>
                            <p className="font-medium text-foreground">24 Months</p>
                            <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-1">EMI: ₹{Math.round((loanAmount * 1.115) / 24).toLocaleString('en-IN')}</p>
                          </div>
                          <div className="border border-border bg-card rounded-xl p-4 cursor-pointer hover:border-moneta-neutral-300 transition-colors">
                            <p className="font-medium text-foreground">36 Months</p>
                            <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-1">EMI: ₹{Math.round((loanAmount * 1.115) / 36).toLocaleString('en-IN')}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-moneta-neutral-100 dark:bg-moneta-neutral-500 rounded-xl p-4 flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-moneta-clay shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Interest rate: 11.5% p.a.</p>
                          <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-1">Special rate based on your 790 credit score. No processing fees.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {applyStep === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground mb-4">Confirm KYC Details</p>
                        <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-4">We've pre-filled this from your Moneta profile.</p>
                        
                        <div className="space-y-3">
                          <div className="bg-card border border-border rounded-xl p-4">
                            <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">Full Name (as per PAN)</p>
                            <p className="font-medium text-foreground">Aditya Rao</p>
                          </div>
                          <div className="bg-card border border-border rounded-xl p-4">
                            <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">PAN Number</p>
                            <p className="font-medium text-foreground">ABCDE1234F</p>
                          </div>
                          <div className="bg-card border border-border rounded-xl p-4">
                            <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">Disbursal Account</p>
                            <p className="font-medium text-foreground">HDFC Bank •••• 4021</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {applyStep === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center py-12"
                    >
                      <div className="w-20 h-20 mb-6 rounded-full bg-moneta-signal-green/10 flex items-center justify-center text-moneta-signal-green">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-heading text-foreground mb-3">Application Submitted</h3>
                      <p className="text-sm text-moneta-neutral-400 dark:text-moneta-neutral-200 max-w-[250px] mx-auto mb-8">
                        Your pre-approved loan of ₹{loanAmount.toLocaleString('en-IN')} has been approved. Funds will hit your HDFC account in ~45 minutes.
                      </p>
                      
                      <div className="w-full bg-card border border-border rounded-2xl p-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-moneta-neutral-400 dark:text-moneta-neutral-200">Application ID</span>
                          <span className="font-medium text-foreground">AXL-88201-99</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-moneta-neutral-400 dark:text-moneta-neutral-200">Status</span>
                          <span className="font-medium text-moneta-signal-green">Processing Disbursal</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {applyStep < 3 && (
                <div className="p-6 border-t border-border bg-background">
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNextStep}
                    className="w-full bg-moneta-clay text-moneta-ink py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-moneta-clay/90 transition-colors"
                  >
                    {applyStep === 1 ? 'Continue to KYC' : 'Submit Application'} 
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              )}
              {applyStep === 3 && (
                <div className="p-6 border-t border-border bg-background">
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={closeApplyFlow}
                    className="w-full bg-moneta-neutral-100 dark:bg-moneta-neutral-500 text-foreground py-4 rounded-xl font-medium hover:bg-moneta-neutral-200 transition-colors"
                  >
                    Back to Offers
                  </motion.button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
