"use client";

import { useModes } from "@/components/providers/ModeProvider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Moon, Sun, AppWindow, Gamepad2, Globe, Image as ImageIcon, FileText, BarChart3 } from "lucide-react";
import { useTheme } from "next-themes";
import { ModeId } from "@/lib/modes";

export function SettingsPanel() {
  const { isSettingsPanelOpen, setIsSettingsPanelOpen, history } = useModes();
  const { theme, setTheme } = useTheme();

  const getStats = () => {
    const counts = history.reduce((acc, item) => {
      acc[item.type] = (acc[item.type] || 0) + 1;
      return acc;
    }, {} as Record<ModeId, number>);
    
    return [
        { name: "Apps", count: counts.app_maker || 0, icon: AppWindow },
        { name: "Games", count: counts.game_maker || 0, icon: Gamepad2 },
        { name: "Websites", count: counts.website_maker || 0, icon: Globe },
        { name: "Images", count: (counts.photo_generator || 0) + (counts.photo_editor || 0), icon: ImageIcon },
        { name: "Documents", count: (counts.document_maker || 0) + (counts.story_generator || 0) + (counts.summarizer || 0), icon: FileText },
    ]
  }

  const stats = getStats();

  return (
    <Sheet open={isSettingsPanelOpen} onOpenChange={setIsSettingsPanelOpen}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription>
            Customize your Unimax AI experience and view your stats.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-6">
            <div>
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
            <div>
                <h3 className="text-sm font-medium mb-4 flex items-center">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Statistics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    {stats.map(stat => (
                         <Card key={stat.name} className="text-center">
                            <CardHeader className="p-4">
                                <stat.icon className="h-6 w-6 mx-auto text-muted-foreground" />
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <p className="text-2xl font-bold">{stat.count}</p>
                                <p className="text-xs text-muted-foreground">{stat.name}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
