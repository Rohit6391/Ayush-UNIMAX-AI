"use client";

import { ThemeProvider } from "./ThemeProvider";
import { AuthProvider } from "./AuthProvider";
import { ModeProvider } from "./ModeProvider";
import { ScriptLoader } from "../ScriptLoader";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <AuthProvider>
        <ModeProvider>
          {children}
          <ScriptLoader />
        </ModeProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
