"use client";

import { CreditCard, Home, LineChart, Mic, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BottomTabBar() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: CreditCard, label: 'Cards', href: '/cards' },
    { icon: Mic, label: 'Assistant', href: '/assistant?autoListen=true', isHero: true },
    { icon: LineChart, label: 'Invest', href: '/invest' },
    { icon: User, label: 'Profile', href: '/profile' },
  ];

  return (
    <nav className="border-t border-border bg-background px-6 py-3 pb-8 sm:pb-3 flex justify-between items-center relative z-40">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        
        if (item.isHero) {
          return (
            <Link href={item.href} key={item.label} className="relative -top-6">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-14 h-14 rounded-full bg-[var(--color-moneta-clay)] animate-pulse-ring opacity-50"></div>
                <div className="relative z-10 w-14 h-14 rounded-full bg-[var(--color-moneta-clay)] text-[var(--color-moneta-ink)] flex items-center justify-center shadow-lg active:scale-95 transition-transform">
                  <item.icon size={28} />
                </div>
              </div>
            </Link>
          );
        }

        return (
          <Link href={item.href} key={item.label} className="flex flex-col items-center gap-1 group">
            <div className={`p-1 rounded-full transition-colors ${isActive ? 'text-[var(--color-moneta-ink)] dark:text-[var(--color-moneta-cream)]' : 'text-[var(--color-moneta-neutral-300)] group-hover:text-foreground'}`}>
              <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span className={`text-[10px] font-medium ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
