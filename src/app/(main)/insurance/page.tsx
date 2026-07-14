"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  ShieldCheck, 
  HeartPulse, 
  AlertTriangle, 
  ArrowRight,
  CheckCircle2,
  X,
  FileText,
  Activity,
  Award,
  ShieldAlert,
  ChevronLeft
} from 'lucide-react';

export default function InsurancePage() {
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [buyStep, setBuyStep] = useState(1); // 1: compare, 2: checkout, 3: success
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const policies = [
    {
      id: 1,
      type: 'Health Insurance',
      provider: 'HDFC Ergo Optima',
      cover: '₹10,00,000',
      premium: '₹12,450 / yr',
      due: '24 Oct 2027',
      icon: <HeartPulse className="w-5 h-5 text-red-500" />,
      color: 'bg-red-100 dark:bg-red-900/30'
    },
    {
      id: 2,
      type: 'Term Life Insurance',
      provider: 'ICICI iProtect Smart',
      cover: '₹1,00,00,000',
      premium: '₹18,200 / yr',
      due: '15 Dec 2026',
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
      color: 'bg-blue-100 dark:bg-blue-900/30'
    }
  ];

  const plans = [
    {
      id: 'niva',
      name: 'Niva Bupa ReAssure',
      premium: '₹3,450',
      cover: '₹40L Top-up',
      csr: '96.4%',
      features: ['Unlimited restoration', 'No room rent cap'],
      recommended: false
    },
    {
      id: 'hdfc',
      name: 'HDFC Ergo Optima Secure',
      premium: '₹4,120',
      cover: '₹40L Top-up',
      csr: '99.2%',
      features: ['2X cover from day 1', 'No sub-limits'],
      recommended: true
    },
    {
      id: 'star',
      name: 'Star Health Assure',
      premium: '₹3,890',
      cover: '₹40L Top-up',
      csr: '98.1%',
      features: ['Automatic restoration', 'Free health checkup'],
      recommended: false
    }
  ];

  const handleSelectPlan = (plan: any) => {
    setSelectedPlan(plan);
    setBuyStep(2);
  };

  const handleCheckout = () => {
    setBuyStep(3);
  };

  const closeFlow = () => {
    setShowCompareModal(false);
    setTimeout(() => {
      setBuyStep(1);
      setSelectedPlan(null);
    }, 300);
  };

  return (
    <div className="flex flex-col h-full bg-background relative">
      <header className="px-6 pt-12 pb-6 sticky top-0 z-10 bg-background/90 backdrop-blur-md">
        <h1 className="font-heading text-3xl text-foreground">Insurance</h1>
      </header>

      {isLoading ? (
        <div className="flex-1 px-6 space-y-8 pt-2">
          <Skeleton className="h-64 w-full rounded-2xl" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-48 w-full rounded-2xl" />
            <Skeleton className="h-48 w-full rounded-2xl" />
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-6 space-y-8">
          
          {/* Coverage Gap Insight */}
        <section>
          <div className="bg-moneta-clay/10 border border-moneta-clay/30 rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-moneta-clay/20 blur-3xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>
            
            <div className="flex gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-moneta-clay/20 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-moneta-clay" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg">You may be underinsured</h3>
                <p className="text-sm text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-1 leading-relaxed">
                  Based on your income and city (Tier 1), a ₹10L health cover leaves you exposed to serious medical inflation.
                </p>
              </div>
            </div>

            {/* Gap Visualizer */}
            <div className="mb-6 relative z-10 space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-moneta-neutral-400 dark:text-moneta-neutral-200">Current Health Cover</span>
                  <span className="font-medium tabular-nums text-foreground">₹10L</span>
                </div>
                <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-moneta-neutral-400 dark:bg-moneta-neutral-500 w-[20%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-medium text-moneta-clay flex items-center gap-1">
                    <ShieldAlert className="w-3 h-3" /> Recommended for your profile
                  </span>
                  <span className="font-medium tabular-nums text-foreground">₹50L</span>
                </div>
                <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-moneta-clay w-full rounded-full"></div>
                </div>
              </div>
            </div>

            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCompareModal(true)}
              className="w-full bg-moneta-clay text-moneta-ink py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-moneta-clay/90 transition-colors relative z-10"
            >
              See Top-up Plans <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </section>

        {/* My Policies */}
        <section>
          <h2 className="text-sm font-semibold text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider mb-4">My Policies</h2>
          <div className="space-y-4">
            {policies.map(policy => (
              <div key={policy.id} className="bg-card border border-border rounded-2xl p-5 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${policy.color} flex items-center justify-center shrink-0`}>
                      {policy.icon}
                    </div>
                    <div>
                      <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-0.5">{policy.type}</p>
                      <h3 className="font-medium text-foreground">{policy.provider}</h3>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-background rounded-xl p-3 border border-border">
                    <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">Total Cover</p>
                    <p className="font-heading text-xl tabular-nums text-foreground">{policy.cover}</p>
                  </div>
                  <div className="bg-background rounded-xl p-3 border border-border">
                    <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">Premium</p>
                    <p className="font-medium tabular-nums text-foreground">{policy.premium}</p>
                    <p className="text-[10px] text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-0.5">Due: {policy.due}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <motion.button whileTap={{ scale: 0.95 }} className="flex-1 bg-moneta-neutral-100 dark:bg-moneta-neutral-500 text-foreground text-sm font-medium py-3 rounded-xl hover:bg-moneta-neutral-200 transition-colors flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4" /> View Policy
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.95 }} className="flex-1 border border-border bg-background text-foreground text-sm font-medium py-3 rounded-xl hover:bg-moneta-neutral-50 dark:hover:bg-moneta-neutral-800 transition-colors flex items-center justify-center gap-2">
                    <Activity className="w-4 h-4" /> File Claim
                  </motion.button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      )}

      {/* Compare & Buy Modal */}
      <AnimatePresence>
        {showCompareModal && (
          <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeFlow}
            />
            
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-background w-full sm:w-[500px] h-[90vh] sm:h-[80vh] rounded-t-[32px] sm:rounded-[32px] overflow-hidden flex flex-col"
            >
              {buyStep === 1 && (
                <>
                  <div className="flex justify-between items-center p-6 border-b border-border bg-background z-10">
                    <div>
                      <h3 className="font-heading text-xl text-foreground">Health Top-Up</h3>
                      <p className="text-sm text-moneta-neutral-400 dark:text-moneta-neutral-200">Boost your cover by ₹40L</p>
                    </div>
                    <button onClick={closeFlow} className="w-8 h-8 rounded-full bg-moneta-neutral-100 dark:bg-moneta-neutral-500 flex items-center justify-center text-foreground hover:bg-moneta-neutral-200 transition-colors shrink-0">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex-1 overflow-x-auto p-6 flex gap-4 snap-x">
                    {plans.map(plan => (
                      <div key={plan.id} className={`w-[280px] shrink-0 snap-center rounded-2xl border-2 p-5 flex flex-col justify-between ${plan.recommended ? 'border-moneta-clay bg-moneta-clay/5' : 'border-border bg-card'}`}>
                        <div>
                          {plan.recommended && (
                            <div className="bg-moneta-clay text-moneta-ink text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide inline-flex items-center gap-1 mb-4">
                              <Award className="w-3 h-3" /> Recommended
                            </div>
                          )}
                          <h4 className="font-medium text-lg text-foreground mb-1">{plan.name}</h4>
                          <div className="text-moneta-neutral-400 dark:text-moneta-neutral-200 text-sm mb-6 border-b border-border pb-4">
                            Cover: <span className="font-medium text-foreground tabular-nums">{plan.cover}</span>
                          </div>
                          
                          <div className="space-y-4 mb-6">
                            <div>
                              <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">Claim Settlement Ratio</p>
                              <p className="font-medium text-moneta-signal-green flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> {plan.csr}</p>
                            </div>
                            <div>
                              <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-2">Key Features</p>
                              <ul className="space-y-2">
                                {plan.features.map((feat, i) => (
                                  <li key={i} className="text-sm text-foreground flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-moneta-clay mt-1.5 shrink-0"></div>
                                    {feat}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between items-baseline mb-4">
                            <span className="text-sm text-moneta-neutral-400 dark:text-moneta-neutral-200">Premium</span>
                            <span className="font-heading text-2xl tabular-nums text-foreground">{plan.premium}<span className="text-sm font-sans text-moneta-neutral-400 dark:text-moneta-neutral-200">/yr</span></span>
                          </div>
                          <motion.button 
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleSelectPlan(plan)}
                            className={`w-full py-3.5 rounded-xl font-medium transition-colors ${plan.recommended ? 'bg-moneta-clay text-moneta-ink hover:bg-moneta-clay/90' : 'bg-moneta-neutral-100 dark:bg-moneta-neutral-500 text-foreground hover:bg-moneta-neutral-200'}`}
                          >
                            Buy {plan.name.split(' ')[0]}
                          </motion.button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {buyStep === 2 && selectedPlan && (
                <div className="flex flex-col h-full">
                  <div className="flex items-center p-4 border-b border-border bg-background">
                    <button onClick={() => setBuyStep(1)} className="w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-moneta-neutral-100 transition-colors">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <h3 className="font-heading text-xl text-foreground ml-2">Checkout Summary</h3>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <div className="bg-card border border-border rounded-2xl p-5">
                      <h4 className="font-medium text-lg text-foreground mb-4">{selectedPlan.name}</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-moneta-neutral-400 dark:text-moneta-neutral-200">Base Cover</span>
                          <span className="font-medium text-foreground">{selectedPlan.cover}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-moneta-neutral-400 dark:text-moneta-neutral-200">Policyholder</span>
                          <span className="font-medium text-foreground">Aditya Rao</span>
                        </div>
                        <div className="flex justify-between text-sm border-t border-border pt-3 mt-1">
                          <span className="text-moneta-neutral-400 dark:text-moneta-neutral-200">Premium (inc. 18% GST)</span>
                          <span className="font-medium text-foreground">{selectedPlan.premium}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-moneta-neutral-100 dark:bg-moneta-neutral-500 rounded-xl p-4 text-sm text-foreground">
                      By proceeding, you agree that you have read the policy wording and no pre-existing diseases have been concealed.
                    </div>
                  </div>

                  <div className="p-6 border-t border-border bg-background">
                    <motion.button 
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCheckout}
                      className="w-full bg-moneta-clay text-moneta-ink py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-moneta-clay/90 transition-colors"
                    >
                      Confirm & Pay {selectedPlan.premium} <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              )}

              {buyStep === 3 && (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-24 h-24 mb-6 rounded-full bg-moneta-signal-green/10 flex items-center justify-center text-moneta-signal-green"
                  >
                    <CheckCircle2 className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-2xl font-heading text-foreground mb-3">Policy Issued!</h3>
                  <p className="text-sm text-moneta-neutral-400 dark:text-moneta-neutral-200 max-w-[280px] mx-auto mb-8">
                    Your ₹40L Top-up cover is now active. The policy document has been sent to aditya@example.com.
                  </p>
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={closeFlow}
                    className="w-full bg-moneta-neutral-100 dark:bg-moneta-neutral-500 text-foreground py-4 rounded-xl font-medium hover:bg-moneta-neutral-200 transition-colors"
                  >
                    Back to Insurance
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
