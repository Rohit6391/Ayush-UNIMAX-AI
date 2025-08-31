
"use client";

import { ThemeProvider } from "./ThemeProvider";
import { AuthProvider } from "./AuthProvider";
import { ModeProvider } from "./ModeProvider";
import { ScriptLoader } from "../ScriptLoader";
import { Toaster } from "../ui/toaster";
import { MemoryProvider } from "@/hooks/use-memory";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <AuthProvider>
        <MemoryProvider>
          <ModeProvider>
              {children}
              <ScriptLoader />
              <Toaster />
          </ModeProvider>
        </MemoryProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
