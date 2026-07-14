"use client";

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface TopBarProps {
  title?: string;
  showBack?: boolean;
  rightAction?: React.ReactNode;
  onBack?: () => void;
}

export function TopBar({ title, showBack = true, rightAction, onBack }: TopBarProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) onBack();
    else router.back();
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-background">
      <div className="w-10 flex justify-start">
        {showBack && (
          <button 
            onClick={handleBack} 
            className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors active:scale-95"
            aria-label="Go back"
          >
            <ChevronLeft size={24} />
          </button>
        )}
      </div>
      
      <div className="flex-1 text-center font-heading text-lg">
        {title}
      </div>

      <div className="w-10 flex justify-end">
        {rightAction}
      </div>
    </header>
  );
}
