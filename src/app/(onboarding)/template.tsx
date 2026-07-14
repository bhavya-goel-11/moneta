"use client";

import { motion } from "framer-motion";

export default function OnboardingTemplate({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="flex-1 flex flex-col h-full bg-background"
    >
      {children}
    </motion.div>
  );
}
