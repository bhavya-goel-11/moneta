"use client";

import { TopBar } from '@/components/layout/TopBar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IdentityPage() {
  const router = useRouter();
  const [aadhaar, setAadhaar] = useState('');
  const [pan, setPan] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (aadhaar && pan) {
      setStatus('loading');
      setTimeout(() => {
        setStatus('success');
      }, 2000);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-background relative">
      <TopBar />
      
      <div className="flex-1 px-6 py-4 flex flex-col">
        <h1 className="text-3xl font-heading mb-3 tracking-tight">Verify your identity</h1>
        <p className="text-muted-foreground mb-8">We need this to secure your account and link your financial data.</p>
        
        <AnimatePresence mode="wait">
          {status === 'idle' && (
            <motion.form 
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleSubmit} 
              className="flex-1 flex flex-col"
            >
              <div className="space-y-4">
                <Card className="p-5 border-border shadow-sm rounded-2xl bg-card">
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Aadhaar Number</label>
                  <Input 
                    type="text" 
                    placeholder="0000 0000 0000" 
                    className="h-12 text-lg border-0 bg-muted/50 rounded-xl px-4 focus-visible:ring-1 focus-visible:ring-[var(--color-moneta-clay)] tracking-wider"
                    value={aadhaar.replace(/(\d{4})(?=\d)/g, '$1 ')}
                    maxLength={14}
                    onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, '').slice(0, 12))}
                  />
                </Card>

                <Card className="p-5 border-border shadow-sm rounded-2xl bg-card">
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">PAN Number</label>
                  <Input 
                    type="text" 
                    placeholder="ABCDE1234F" 
                    className="h-12 text-lg border-0 bg-muted/50 rounded-xl px-4 focus-visible:ring-1 focus-visible:ring-[var(--color-moneta-clay)] tracking-widest uppercase"
                    value={pan}
                    onChange={(e) => setPan(e.target.value.toUpperCase().slice(0, 10))}
                  />
                </Card>
              </div>

              <div className="mt-auto pb-4 pt-8">
                <Button 
                  type="submit"
                  disabled={aadhaar.length < 12 || pan.length < 10}
                  className="w-full h-14 text-lg rounded-2xl bg-foreground text-background hover:bg-foreground/90 disabled:bg-muted disabled:text-muted-foreground transition-all shadow-md"
                >
                  Verify Securely
                </Button>
              </div>
            </motion.form>
          )}

          {status === 'loading' && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center -mt-20"
            >
              <Loader2 className="w-12 h-12 text-[var(--color-moneta-clay)] animate-spin mb-6" />
              <h2 className="text-xl font-heading mb-2">Fetching your details securely…</h2>
              <p className="text-muted-foreground text-sm text-center px-8">Connecting to CERSAI registry to verify your identity.</p>
            </motion.div>
          )}

          {status === 'success' && (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex items-center justify-center mb-8 mt-4">
                <div className="w-16 h-16 bg-[var(--color-moneta-signal-green)]/10 rounded-full flex items-center justify-center text-[var(--color-moneta-signal-green)]">
                  <CheckCircle2 size={32} />
                </div>
              </div>
              
              <h2 className="text-2xl font-heading text-center mb-6">KYC Verified</h2>
              
              <Card className="p-6 border-border shadow-sm rounded-2xl bg-card space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Full Name</p>
                  <p className="text-lg font-medium">Aditya Rao</p>
                </div>
                <div className="w-full h-px bg-border"></div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Date of Birth</p>
                  <p className="text-base">14 Aug 1997</p>
                </div>
                <div className="w-full h-px bg-border"></div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Address</p>
                  <p className="text-sm leading-relaxed">402, Skyline Residency, Indiranagar<br/>Bangalore, Karnataka 560038</p>
                </div>
              </Card>

              <div className="mt-auto pb-4 pt-8">
                <Button 
                  onClick={() => router.push('/link-accounts')}
                  className="w-full h-14 text-lg rounded-2xl bg-foreground text-background hover:bg-foreground/90 transition-all shadow-md"
                >
                  Continue
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
