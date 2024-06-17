"use client";

import { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider>
      <Toaster richColors position="top-right" />
      {children}
    </TooltipProvider>
  );
}
