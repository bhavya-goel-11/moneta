"use client";

import { TopBar } from '@/components/layout/TopBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function PhonePage() {
  const router = useRouter();
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(29);

  useEffect(() => {
    if (step === 'otp' && countdown > 0) {
      const timer = setTimeout(() => setCountdown(c => c - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [step, countdown]);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setStep('otp');
    }
  };

  const handleOtpChange = (value: string) => {
    setOtp(value);
    if (value.length === 6) {
      // Auto advance
      router.push('/identity');
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-background">
      <TopBar onBack={() => {
        if (step === 'otp') setStep('phone');
        else router.back();
      }} />
      
      <div className="flex-1 px-6 py-8">
        {step === 'phone' ? (
          <form onSubmit={handlePhoneSubmit} className="h-full flex flex-col">
            <h1 className="text-3xl font-heading mb-3 tracking-tight">Enter your mobile number</h1>
            <p className="text-muted-foreground mb-8">We'll send you a secure OTP to verify.</p>
            
            <div className="flex gap-3">
              <div className="w-16 h-14 bg-muted rounded-xl flex items-center justify-center font-medium border border-border">
                +91
              </div>
              <Input 
                autoFocus
                type="tel" 
                placeholder="00000 00000" 
                className="flex-1 h-14 text-xl tracking-wider rounded-xl bg-transparent focus-visible:ring-[var(--color-moneta-clay)]"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
              />
            </div>

            <div className="mt-auto pt-8 pb-4">
              <Button 
                type="submit"
                disabled={phone.length < 10}
                className="w-full h-14 text-lg rounded-2xl bg-foreground text-background hover:bg-foreground/90 disabled:bg-muted disabled:text-muted-foreground transition-all shadow-md"
              >
                Continue
              </Button>
            </div>
          </form>
        ) : (
          <div className="h-full flex flex-col">
            <h1 className="text-3xl font-heading mb-3 tracking-tight">Verify it's you</h1>
            <p className="text-muted-foreground mb-10">We've sent a code to +91 {phone}</p>
            
            <div className="flex justify-center mb-8">
              <InputOTP maxLength={6} value={otp} onChange={handleOtpChange} autoFocus>
                <InputOTPGroup className="gap-2 sm:gap-3">
                  {[...Array(6)].map((_, i) => (
                    <InputOTPSlot 
                      key={i} 
                      index={i} 
                      className="w-12 h-14 sm:w-14 sm:h-16 text-2xl rounded-xl border-border bg-transparent ring-offset-background focus-visible:ring-[var(--color-moneta-clay)]" 
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="text-center text-sm font-medium">
              {countdown > 0 ? (
                <span className="text-muted-foreground">Resend in 0:{countdown.toString().padStart(2, '0')}</span>
              ) : (
                <button className="text-[var(--color-moneta-clay)] hover:underline">Resend OTP</button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
