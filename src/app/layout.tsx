import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moneta - Unified Financial Super-App",
  description: "Your financial life, orchestrated.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="h-[100dvh] flex flex-col items-center bg-gray-100 sm:p-4 sm:h-screen overflow-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Mobile viewport frame for desktop */}
          <div className="w-full max-w-[430px] h-full sm:h-[800px] sm:max-h-full bg-background text-foreground shadow-2xl sm:rounded-3xl sm:border sm:border-gray-300 relative overflow-hidden flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
