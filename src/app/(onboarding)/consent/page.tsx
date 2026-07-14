"use client";

import { TopBar } from '@/components/layout/TopBar';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ConsentPage() {
  const router = useRouter();
  const [consents, setConsents] = useState({
    balance: true,
    history: true,
    investments: true
  });

  const allChecked = Object.values(consents).every(Boolean);

  const handleSubmit = () => {
    if (allChecked) {
      router.push('/success');
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-background">
      <TopBar />
      
      <div className="flex-1 px-6 py-4 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[var(--color-moneta-clay)]/20 flex items-center justify-center text-[var(--color-moneta-clay)]">
            <ShieldCheck size={24} />
          </div>
          <h1 className="text-3xl font-heading tracking-tight">Your consent matters</h1>
        </div>
        
        <p className="text-muted-foreground mb-8">Moneta needs your permission to securely access your data. You can revoke this at any time.</p>
        
        <div className="space-y-6 flex-1">
          <div className="flex items-start space-x-4 p-4 rounded-xl border border-border bg-card">
            <Checkbox 
              id="balance" 
              checked={consents.balance} 
              onCheckedChange={(c) => setConsents(p => ({ ...p, balance: !!c }))}
              className="mt-1 w-5 h-5 rounded"
            />
            <div className="grid gap-1.5 leading-none">
              <label htmlFor="balance" className="font-medium text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Account balance
              </label>
              <p className="text-sm text-muted-foreground">To show your aggregated net worth.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-xl border border-border bg-card">
            <Checkbox 
              id="history" 
              checked={consents.history} 
              onCheckedChange={(c) => setConsents(p => ({ ...p, history: !!c }))}
              className="mt-1 w-5 h-5 rounded"
            />
            <div className="grid gap-1.5 leading-none">
              <label htmlFor="history" className="font-medium text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Transaction history
              </label>
              <p className="text-sm text-muted-foreground">To track spending and categorise expenses automatically.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-xl border border-border bg-card">
            <Checkbox 
              id="investments" 
              checked={consents.investments} 
              onCheckedChange={(c) => setConsents(p => ({ ...p, investments: !!c }))}
              className="mt-1 w-5 h-5 rounded"
            />
            <div className="grid gap-1.5 leading-none">
              <label htmlFor="investments" className="font-medium text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Investment holdings
              </label>
              <p className="text-sm text-muted-foreground">To provide a holistic view of your wealth across mutual funds and stocks.</p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-6 pb-4">
          <p className="text-center text-xs text-muted-foreground mb-4 font-medium flex items-center justify-center gap-2">
            <span>Powered by</span>
            <span className="text-foreground">Account Aggregator framework</span>
          </p>
          <Button 
            onClick={handleSubmit}
            disabled={!allChecked}
            className="w-full h-14 text-lg rounded-2xl bg-[var(--color-moneta-ink)] text-[var(--color-moneta-cream)] hover:bg-[var(--color-moneta-ink-2)] disabled:bg-muted disabled:text-muted-foreground transition-all shadow-md"
          >
            Approve & Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
