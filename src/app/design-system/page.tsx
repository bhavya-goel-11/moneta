import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function DesignSystemPage() {
  return (
    <div className="p-6 space-y-12 bg-background min-h-screen overflow-y-auto">
      <div>
        <h1 className="text-3xl font-heading mb-4">Moneta Design System</h1>
        <p className="text-muted-foreground">Internal preview for colors, typography, and components.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-heading border-b pb-2">Color Palette</h2>
        <div className="grid grid-cols-2 gap-4">
          <ColorSwatch name="Ink (Primary Dark)" color="bg-[var(--color-moneta-ink)]" text="text-white" />
          <ColorSwatch name="Ink 2 (Surface Dark)" color="bg-[var(--color-moneta-ink-2)]" text="text-white" />
          <ColorSwatch name="Cream (Primary Light)" color="bg-[var(--color-moneta-cream)]" text="text-black" border />
          <ColorSwatch name="Clay (Accent)" color="bg-[var(--color-moneta-clay)]" text="text-black" />
          <ColorSwatch name="Sage (Secondary Accent)" color="bg-[var(--color-moneta-sage)]" text="text-black" />
          <ColorSwatch name="Signal Red (Negative)" color="bg-[var(--color-moneta-signal-red)]" text="text-white" />
          <ColorSwatch name="Signal Green (Positive)" color="bg-[var(--color-moneta-signal-green)]" text="text-white" />
        </div>
        <h3 className="text-xl font-heading mt-6 mb-2">Neutrals</h3>
        <div className="grid grid-cols-5 gap-2">
          <ColorSwatch name="100" color="bg-[var(--color-moneta-neutral-100)]" text="text-black" border compact />
          <ColorSwatch name="200" color="bg-[var(--color-moneta-neutral-200)]" text="text-black" compact />
          <ColorSwatch name="300" color="bg-[var(--color-moneta-neutral-300)]" text="text-black" compact />
          <ColorSwatch name="400" color="bg-[var(--color-moneta-neutral-400)]" text="text-white" compact />
          <ColorSwatch name="500" color="bg-[var(--color-moneta-neutral-500)]" text="text-white" compact />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-heading border-b pb-2">Typography</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-muted-foreground">Fraunces (Heading)</h3>
            <div className="font-heading text-4xl">Display 4xl (36px)</div>
            <div className="font-heading text-3xl">Display 3xl (30px)</div>
            <div className="font-heading text-2xl">Heading 2xl (24px)</div>
            <div className="font-heading text-xl">Heading xl (20px)</div>
            <div className="font-heading text-lg">Heading lg (18px)</div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-muted-foreground">Inter (Body)</h3>
            <div className="font-sans text-xl">Body xl (20px)</div>
            <div className="font-sans text-lg">Body lg (18px)</div>
            <div className="font-sans text-base">Body base (16px)</div>
            <div className="font-sans text-sm">Body sm (14px)</div>
            <div className="font-sans text-xs">Body xs (12px)</div>
            <div className="mt-4 p-4 border rounded-xl bg-card text-card-foreground">
              <p className="text-sm text-muted-foreground mb-2">Tabular Numerals Test</p>
              <div className="font-sans text-lg flex flex-col font-medium tabular-nums space-y-1">
                <span>₹1,84,320.00</span>
                <span>₹ 42,150.00</span>
                <span>₹  9,999.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-heading border-b pb-2">Buttons</h2>
        <div className="space-y-6">
          <div className="flex flex-col gap-3 items-start">
            <span className="text-sm text-muted-foreground">Primary</span>
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button className="hover:bg-primary/90">Hover</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <span className="text-sm text-muted-foreground">Secondary</span>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary">Default</Button>
              <Button variant="secondary" className="hover:bg-secondary/80">Hover</Button>
              <Button variant="secondary" disabled>Disabled</Button>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <span className="text-sm text-muted-foreground">Ghost</span>
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost">Default</Button>
              <Button variant="ghost" className="hover:bg-accent hover:text-accent-foreground">Hover</Button>
              <Button variant="ghost" disabled>Disabled</Button>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <span className="text-sm text-muted-foreground">Destructive</span>
            <div className="flex flex-wrap gap-3">
              <Button variant="destructive">Default</Button>
              <Button variant="destructive" className="hover:bg-destructive/90">Hover</Button>
              <Button variant="destructive" disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-heading border-b pb-2">Cards & Surfaces</h2>
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Base Card Component</CardTitle>
              <CardDescription>Using standard layout and spacing</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">This shows the default styling with rounded corners, shadows, and background colors mapped to Moneta's design tokens.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>
          
          <Card className="bg-[var(--color-moneta-ink-2)] text-[var(--color-moneta-cream)] border-none">
            <CardHeader>
              <CardTitle className="font-heading">Dark Surface Card</CardTitle>
              <CardDescription className="text-[var(--color-moneta-neutral-200)]">Explicit dark background</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--color-moneta-neutral-100)]">Cards on a dark background use Ink-2 to stand out slightly from the main Ink background.</p>
            </CardContent>
            <CardFooter>
              <Button className="bg-[var(--color-moneta-clay)] text-[var(--color-moneta-ink)] hover:bg-[var(--color-moneta-clay)]/90">Accent Action</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="space-y-4 pb-12">
        <h2 className="text-2xl font-heading border-b pb-2">Motion</h2>
        <div className="flex items-center gap-6 py-4">
          <div className="relative flex items-center justify-center w-16 h-16 shrink-0">
            <div className="absolute w-12 h-12 rounded-full bg-[var(--color-moneta-clay)] animate-pulse-ring"></div>
            <button className="relative z-10 w-12 h-12 rounded-full bg-[var(--color-moneta-clay)] text-[var(--color-moneta-ink)] flex items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
            </button>
          </div>
          <p className="text-sm text-muted-foreground">Signature "pulse ring" for voice/mic button.</p>
        </div>
      </section>
    </div>
  );
}

function ColorSwatch({ name, color, text, border = false, compact = false }: { name: string, color: string, text: string, border?: boolean, compact?: boolean }) {
  return (
    <div className={`p-3 rounded-xl flex flex-col justify-end ${compact ? 'h-20' : 'min-h-28'} ${color} ${text} ${border ? 'border border-border' : ''}`}>
      <span className="font-medium text-xs sm:text-sm leading-tight break-words">{name}</span>
    </div>
  );
}
