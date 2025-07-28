"use client";

import { useModes } from "@/components/providers/ModeProvider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function SettingsPanel() {
  const { isSettingsPanelOpen, setIsSettingsPanelOpen } = useModes();
  const { theme, setTheme } = useTheme();

  return (
    <Sheet open={isSettingsPanelOpen} onOpenChange={setIsSettingsPanelOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription>
            Customize your Unimax AI experience.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
            <h3 className="text-sm font-medium mb-2">Theme</h3>
            <div className="grid grid-cols-2 gap-2">
                <Button variant={theme === 'light' ? 'default' : 'outline'} onClick={() => setTheme('light')}>
                    <Sun className="mr-2 h-4 w-4" />
                    Light
                </Button>
                <Button variant={theme === 'dark' ? 'default' : 'outline'} onClick={() => setTheme('dark')}>
                    <Moon className="mr-2 h-4 w-4" />
                    Dark
                </Button>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
