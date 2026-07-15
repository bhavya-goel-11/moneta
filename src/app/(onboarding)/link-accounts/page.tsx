"use client";

import { TopBar } from '@/components/layout/TopBar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Building2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const BANKS = [
  { id: 'hdfc', name: 'HDFC Bank', accountType: 'Savings', last4: '4567' },
  { id: 'icici', name: 'ICICI Bank', accountType: 'Salary', last4: '8901' },
  { id: 'sbi', name: 'State Bank of India', accountType: 'Savings', last4: '1122' },
  { id: 'axis', name: 'Axis Bank', accountType: 'Current', last4: '9988' },
];

export default function LinkAccountsPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>(['hdfc', 'icici']);

  const toggleBank = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-background min-h-0">
      <TopBar />
      
      <div className="flex-1 px-6 py-4 flex flex-col min-h-0">
        <h1 className="text-3xl font-heading mb-3 tracking-tight">Link your accounts</h1>
        <p className="text-muted-foreground mb-8">We found these accounts linked to your mobile number. Select the ones you want to connect.</p>
        
        <div className="space-y-3 flex-1 overflow-y-auto pb-4">
          {BANKS.map((bank) => {
            const isSelected = selected.includes(bank.id);
            return (
              <Card 
                key={bank.id}
                className={`p-4 rounded-2xl cursor-pointer transition-all border-2 flex items-center gap-4 ${isSelected ? 'border-[var(--color-moneta-clay)] bg-muted/30' : 'border-transparent bg-card shadow-sm hover:border-border'}`}
                onClick={() => toggleBank(bank.id)}
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Building2 size={24} className="text-muted-foreground" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium">{bank.name}</h3>
                  <p className="text-sm text-muted-foreground">{bank.accountType} •••• {bank.last4}</p>
                </div>

                <div className="shrink-0">
                  <Checkbox 
                    checked={isSelected}
                    onCheckedChange={() => toggleBank(bank.id)}
                    className={`w-6 h-6 rounded-full border-2 ${isSelected ? 'border-[var(--color-moneta-clay)] bg-[var(--color-moneta-clay)] text-[var(--color-moneta-ink)]' : 'border-muted-foreground'}`}
                  />
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-auto pt-4 pb-4 bg-background">
          <Button 
            onClick={() => router.push('/consent')}
            disabled={selected.length === 0}
            className="w-full h-14 text-lg rounded-2xl bg-foreground text-background hover:bg-foreground/90 disabled:bg-muted disabled:text-muted-foreground transition-all shadow-md"
          >
            Link {selected.length} Account{selected.length !== 1 && 's'}
          </Button>
        </div>
      </div>
    </div>
  );
}
