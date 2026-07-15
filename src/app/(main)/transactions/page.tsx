"use client";

import { motion } from 'framer-motion';
import { ChevronLeft, Search, Filter } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const TRANSACTIONS = [
  { id: 1, merchant: "Swiggy", category: "Food", amount: -420, time: "2h ago", initial: "S", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
  { id: 2, merchant: "Ramesh (Landlord)", category: "Rent", amount: -28500, time: "Yesterday", initial: "R", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  { id: 3, merchant: "Salary - ICICI", category: "Income", amount: 142150, time: "Yesterday", initial: "I", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  { id: 4, merchant: "Amazon India", category: "Shopping", amount: -1240, time: "24 Oct", initial: "A", color: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300" },
  { id: 5, merchant: "Uber", category: "Travel", amount: -350, time: "23 Oct", initial: "U", color: "bg-black text-white dark:bg-white dark:text-black" },
  { id: 6, merchant: "Zomato", category: "Food", amount: -680, time: "22 Oct", initial: "Z", color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
  { id: 7, merchant: "Jio Prepaid", category: "Bills", amount: -239, time: "20 Oct", initial: "J", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  { id: 8, merchant: "Blinkit", category: "Groceries", amount: -450, time: "18 Oct", initial: "B", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
  { id: 9, merchant: "Netflix", category: "Entertainment", amount: -649, time: "15 Oct", initial: "N", color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
  { id: 10, merchant: "Starbucks", category: "Food", amount: -350, time: "14 Oct", initial: "S", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" }
];

export default function TransactionsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTransactions = TRANSACTIONS.filter(tx => 
    tx.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tx.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-background relative">
      <header className="px-6 pt-12 pb-6 sticky top-0 z-10 bg-background/90 backdrop-blur-md flex items-center gap-4">
        <motion.button 
          whileTap={{ scale: 0.9 }} 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-moneta-neutral-100 dark:hover:bg-moneta-neutral-500 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <h1 className="font-heading text-3xl text-foreground tracking-tight">Transactions</h1>
      </header>

      <div className="flex-1 overflow-y-auto px-6 pb-20 space-y-6">
        
        {/* Total Spend Summary */}
        <section className="bg-card border border-border rounded-3xl p-6 shadow-sm text-center">
          <p className="text-sm font-semibold text-moneta-neutral-400 dark:text-moneta-neutral-200 uppercase tracking-wider mb-2">Total Spend This Month</p>
          <h2 className="font-heading text-4xl text-foreground tracking-tight tabular-nums">₹32,879</h2>
          <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-2 font-medium">Out of ₹45,000 budget</p>
          <div className="w-full h-2 bg-moneta-neutral-100 dark:bg-moneta-neutral-500 rounded-full mt-4 overflow-hidden">
            <div className="h-full bg-moneta-clay w-[73%] rounded-full"></div>
          </div>
        </section>

        {/* Search & Filter */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-moneta-neutral-300" />
            <input 
              type="text" 
              placeholder="Search transactions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 bg-card border border-border rounded-2xl pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-moneta-clay transition-colors"
            />
          </div>
          <button className="w-12 h-12 bg-card border border-border rounded-2xl flex items-center justify-center text-foreground hover:bg-moneta-neutral-100 dark:hover:bg-moneta-neutral-500 transition-colors shrink-0">
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* Transactions List */}
        <div className="bg-card rounded-2xl p-2 shadow-sm border border-border">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((tx, idx) => (
              <motion.div 
                whileTap={{ scale: 0.98 }} 
                key={tx.id} 
                className={`flex items-center justify-between p-4 cursor-pointer ${idx !== filteredTransactions.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium ${tx.color}`}>
                    {tx.initial}
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-base">{tx.merchant}</p>
                    <p className="text-xs text-moneta-neutral-400 dark:text-moneta-neutral-200 mt-1">{tx.category} • {tx.time}</p>
                  </div>
                </div>
                <div className={`text-base font-medium tabular-nums ${tx.amount > 0 ? 'text-moneta-signal-green' : 'text-foreground'}`}>
                  {tx.amount > 0 ? '+' : '-'}₹{Math.abs(tx.amount).toLocaleString('en-IN')}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="p-8 text-center text-moneta-neutral-400 dark:text-moneta-neutral-200 text-sm">
              No transactions found.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
