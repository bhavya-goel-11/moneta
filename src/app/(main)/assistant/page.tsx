"use client";

import { useState, useRef, useEffect } from 'react';
import { 
  Mic, 
  Send, 
  Wallet, 
  CreditCard, 
  BarChart3, 
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Building2,
  Plane,
  Sparkles,
  MoreHorizontal,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

type MessageType = 'user' | 'assistant';
type ComponentType = 'balance' | 'payment' | 'cards' | 'chart' | null;

interface Message {
  id: string;
  type: MessageType;
  text?: string;
  component?: ComponentType;
}

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Payment Modal State
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'processing' | 'success'>('processing');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autoListen') === 'true') {
        setIsListening(true);
      }
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const suggestedPrompts = [
    { text: "What's my account balance?", component: 'balance' as ComponentType },
    { text: "Pay 500 to Rohan for dinner", component: 'payment' as ComponentType },
    { text: "Which card should I use for a ₹3,000 flight booking?", component: 'cards' as ComponentType },
    { text: "How much did I spend on food this month?", component: 'chart' as ComponentType }
  ];

  const handleSend = (text: string, component: ComponentType = null) => {
    if (!text.trim()) return;

    // Add user message
    const newMessages: Message[] = [
      ...messages,
      { id: Date.now().toString(), type: 'user', text }
    ];
    setMessages(newMessages);
    setInputText("");
    setIsListening(false);
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      setIsTyping(false);
      let replyText = "";
      
      switch(component) {
        case 'balance':
          replyText = "Here are your current bank account balances. Your total liquid balance is ₹2,26,470.";
          break;
        case 'payment':
          replyText = "I've set up the payment to Rohan. Please review and confirm the details below.";
          break;
        case 'cards':
          replyText = "For travel bookings like flights, I recommend your HDFC Regalia card for the best rewards.";
          break;
        case 'chart':
          replyText = "You've spent ₹8,450 on food and dining this month. Here's a weekly breakdown.";
          break;
        default:
          replyText = "I can certainly help with that. This is a demo response since I'm just a prototype.";
      }

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          text: replyText,
          component
        }
      ]);
    }, 1200);
  };

  const handlePaymentConfirm = () => {
    setShowPaymentModal(true);
    setPaymentStatus('processing');
    
    // Simulate payment flow
    setTimeout(() => {
      setPaymentStatus('success');
      setTimeout(() => {
        setShowPaymentModal(false);
      }, 2000);
    }, 2500);
  };

  const renderComponent = (component: ComponentType) => {
    switch (component) {
      case 'balance':
        return (
          <div className="bg-card border border-border rounded-2xl p-4 mt-3 shadow-sm w-[280px]">
            <h4 className="text-[11px] font-semibold text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider mb-3">Bank Accounts</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground leading-none">HDFC Savings</p>
                    <p className="text-[11px] text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-1">••• 4021</p>
                  </div>
                </div>
                <p className="font-medium tabular-nums text-sm text-foreground">₹1,84,320</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-700 dark:text-orange-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground leading-none">ICICI Salary</p>
                    <p className="text-[11px] text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-1">••• 8832</p>
                  </div>
                </div>
                <p className="font-medium tabular-nums text-sm text-foreground">₹42,150</p>
              </div>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="bg-card border border-border rounded-2xl p-5 mt-3 shadow-sm w-[280px]">
            <div className="flex flex-col items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-moneta-neutral-100 dark:bg-moneta-neutral-500 flex items-center justify-center text-lg font-medium text-foreground mb-2">
                R
              </div>
              <h3 className="font-medium text-foreground">Rohan Sharma</h3>
              <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200">rohan@okicici</p>
            </div>
            
            <div className="bg-background rounded-xl p-3 mb-4 text-center border border-border">
              <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mb-1">Paying</p>
              <p className="text-3xl font-heading text-foreground tabular-nums">₹500</p>
              <div className="mt-2 text-sm text-foreground bg-moneta-neutral-100 dark:bg-moneta-neutral-500 rounded-lg py-1 px-3 inline-block">
                dinner
              </div>
            </div>

            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={handlePaymentConfirm}
              className="w-full bg-moneta-clay text-moneta-ink py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-moneta-clay/90 transition-colors"
            >
              Confirm & Pay <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        );

      case 'cards':
        return (
          <div className="bg-card border border-border rounded-2xl p-4 mt-3 shadow-sm w-[280px] space-y-3">
            <div className="relative p-3 rounded-xl border-2 border-moneta-clay bg-moneta-clay/5">
              <div className="absolute -top-2.5 right-3 bg-moneta-clay text-moneta-ink text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Best Choice
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-7 rounded bg-blue-900 border border-blue-800 flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-white/50" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground leading-none">HDFC Regalia</p>
                  <p className="text-[11px] text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-1 flex items-center gap-1">
                    <Plane className="w-3 h-3" /> 5X rewards on travel
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-3 rounded-xl border border-border bg-background opacity-75">
              <div className="flex items-start gap-3">
                <div className="w-10 h-7 rounded bg-gray-800 border border-gray-700 flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-white/50" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground leading-none">Axis Ace</p>
                  <p className="text-[11px] text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-1">2% standard cashback</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'chart':
        return (
          <div className="bg-card border border-border rounded-2xl p-4 mt-3 shadow-sm w-[280px]">
            <h4 className="text-[11px] font-semibold text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider mb-4">Food Spend (Nov)</h4>
            <div className="flex items-end justify-between h-32 pb-2 border-b border-border">
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 bg-moneta-neutral-200 dark:bg-moneta-neutral-400 rounded-t-md h-16"></div>
                <span className="text-[10px] text-moneta-neutral-400 dark:text-moneta-neutral-200">W1</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 bg-moneta-neutral-200 dark:bg-moneta-neutral-400 rounded-t-md h-24"></div>
                <span className="text-[10px] text-moneta-neutral-400 dark:text-moneta-neutral-200">W2</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 bg-moneta-clay rounded-t-md h-28 relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-medium tabular-nums bg-foreground text-background px-1.5 py-0.5 rounded">₹3.2k</div>
                </div>
                <span className="text-[10px] font-medium text-foreground">W3</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 bg-moneta-neutral-200 dark:bg-moneta-neutral-400 rounded-t-md h-12"></div>
                <span className="text-[10px] text-moneta-neutral-400 dark:text-moneta-neutral-200">W4</span>
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center text-sm">
              <span className="text-moneta-neutral-400 dark:text-moneta-neutral-200">Total</span>
              <span className="font-medium tabular-nums text-foreground">₹8,450</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-background relative">
      {/* Header */}
      <header className="px-6 pt-10 pb-4 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-20 flex items-center justify-center">
        <p className="font-heading text-lg text-foreground tracking-tight">MonetAI</p>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {isLoading ? (
          <div className="h-full flex flex-col justify-end pb-4 max-w-[400px] mx-auto space-y-4">
            <div className="mb-8 text-center flex flex-col items-center space-y-4">
              <Skeleton className="w-16 h-16 rounded-full" />
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-4 w-64" />
            </div>
            <Skeleton className="h-14 w-full rounded-2xl" />
            <Skeleton className="h-14 w-full rounded-2xl" />
            <Skeleton className="h-14 w-full rounded-2xl" />
            <Skeleton className="h-14 w-full rounded-2xl" />
          </div>
        ) : messages.length === 0 ? (
          <motion.div 
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="h-full flex flex-col justify-end pb-4 max-w-[400px] mx-auto"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="mb-8 text-center px-4">
              <div className="w-16 h-16 rounded-full bg-moneta-clay flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-heading text-moneta-ink">M</span>
              </div>
              <h2 className="text-2xl font-heading text-foreground mb-2">How can I help?</h2>
              <p className="text-sm text-moneta-neutral-400 dark:text-moneta-neutral-200">I can analyze your spending, make payments, and optimize your cards.</p>
            </motion.div>
            
            <div className="space-y-2">
              {suggestedPrompts.map((prompt, idx) => (
                <motion.button
                  variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                  whileTap={{ scale: 0.98 }}
                  key={idx}
                  onClick={() => handleSend(prompt.text, prompt.component)}
                  className="w-full text-left bg-card hover:bg-moneta-neutral-100 dark:hover:bg-moneta-neutral-500 border border-border p-3 rounded-2xl text-sm text-foreground transition-colors flex items-center justify-between group outline-none"
                >
                  {prompt.text}
                  <ChevronRight className="w-4 h-4 text-moneta-neutral-300 group-hover:text-foreground" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="space-y-6 pb-4">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.type === 'assistant' && (
                    <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 mr-2 mt-1">
                      <span className="text-[10px] font-heading text-background">M</span>
                    </div>
                  )}
                  
                  <div className={`max-w-[85%] ${msg.type === 'user' ? 'order-1' : 'order-2'}`}>
                    {msg.text && (
                      <div 
                        className={`px-4 py-3 text-sm leading-relaxed ${
                          msg.type === 'user' 
                            ? 'bg-moneta-clay text-moneta-ink rounded-2xl rounded-tr-sm' 
                            : 'bg-moneta-neutral-100 dark:bg-moneta-ink-2 text-foreground rounded-2xl rounded-tl-sm'
                        }`}
                      >
                        {msg.text}
                      </div>
                    )}
                    {msg.component && renderComponent(msg.component)}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 mr-2 mt-1">
                    <span className="text-[10px] font-heading text-background">M</span>
                  </div>
                  <div className="bg-moneta-neutral-100 dark:bg-moneta-ink-2 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1">
                    <MoreHorizontal className="w-5 h-5 text-moneta-neutral-400 animate-pulse" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-background border-t border-border z-10 relative">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <input 
              type="text" 
              value={isListening ? "" : inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(inputText)}
              placeholder={isListening ? "" : "Ask Moneta..."}
              disabled={isListening}
              className="w-full bg-card border border-border rounded-full py-3.5 pl-5 pr-12 text-sm text-foreground placeholder:text-moneta-neutral-400 dark:placeholder:text-moneta-neutral-200 focus:outline-none focus:border-moneta-clay focus:ring-1 focus:ring-moneta-clay transition-all disabled:opacity-100"
            />
            {isListening && (
              <div className="absolute inset-y-0 left-5 flex items-center">
                {/* Waveform placeholder */}
                <div className="flex items-center gap-1 h-4">
                  <motion.div animate={{ height: ["40%", "100%", "40%"] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-moneta-clay rounded-full"></motion.div>
                  <motion.div animate={{ height: ["80%", "30%", "80%"] }} transition={{ repeat: Infinity, duration: 0.9 }} className="w-1 bg-moneta-clay rounded-full"></motion.div>
                  <motion.div animate={{ height: ["50%", "100%", "50%"] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-1 bg-moneta-clay rounded-full"></motion.div>
                  <motion.div animate={{ height: ["100%", "40%", "100%"] }} transition={{ repeat: Infinity, duration: 1.1 }} className="w-1 bg-moneta-clay rounded-full"></motion.div>
                </div>
              </div>
            )}
            {inputText.trim() && !isListening && (
              <button 
                onClick={() => handleSend(inputText)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-moneta-clay flex items-center justify-center text-moneta-ink"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            )}
          </div>
          
          <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center">
            {isListening && (
              <div className="absolute inset-0 bg-moneta-clay rounded-full animate-pulse-ring opacity-50"></div>
            )}
            <button 
              onClick={() => setIsListening(!isListening)}
              className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-colors ${
                isListening ? 'bg-moneta-clay text-moneta-ink' : 'bg-foreground text-background'
              }`}
            >
              {isListening ? <X className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Payment Handoff Modal (Absolute Full Screen overlay) */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center sm:items-center p-4 sm:p-0"
          >
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-background w-full sm:w-[350px] rounded-[32px] overflow-hidden flex flex-col items-center justify-center py-16 px-6 relative"
            >
              {paymentStatus === 'processing' ? (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-6 rounded-full border-4 border-moneta-neutral-100 dark:border-moneta-neutral-500 border-t-moneta-clay animate-spin"></div>
                  <h3 className="text-xl font-heading text-foreground mb-2">Opening GPay...</h3>
                  <p className="text-sm text-moneta-neutral-400 dark:text-moneta-neutral-200 text-center">Handing off to complete your ₹500 payment to Rohan.</p>
                </div>
              ) : (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 mb-6 rounded-full bg-moneta-signal-green/10 flex items-center justify-center text-moneta-signal-green">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-heading text-foreground mb-2">Payment Successful</h3>
                  <p className="text-sm text-moneta-neutral-400 dark:text-moneta-neutral-200 text-center">₹500 sent to Rohan Sharma.</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
