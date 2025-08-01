
"use client";

import { useModes, HistoryItem } from "@/components/providers/ModeProvider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Moon, Sun, BarChart3, BrainCircuit, KeyRound, ExternalLink, Bot } from "lucide-react";
import { useTheme } from "next-themes";
import { modes } from "@/lib/modes";
import { ScrollArea } from "../ui/scroll-area";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { availableModels } from "@/lib/models";

const getIconForType = (type: HistoryItem['type']) => {
    const mode = modes.find(m => m.id === type);
    return mode ? mode.icon : BrainCircuit;
};

const HistoryCard = ({ item }: { item: HistoryItem }) => {
    const { setActiveMode } = useModes();
    const Icon = getIconForType(item.type);
    const mode = modes.find(m => m.id === item.type);

    const renderThumbnail = () => {
        if (typeof item.data === 'string' && item.data.startsWith('data:image')) {
            return <img src={item.data} alt={item.prompt} className="w-full h-full object-cover"/>
        }
        return <Icon className="w-6 h-6 text-muted-foreground" />;
    }

    return (
        <button 
            onClick={() => {
                if (mode) setActiveMode(mode.id);
            }}
            className="w-full text-left"
        >
            <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                <CardHeader className="flex-row items-center gap-3 space-y-0 p-3">
                     <div className="w-10 h-10 flex-shrink-0 bg-muted rounded-md flex items-center justify-center overflow-hidden">
                        {renderThumbnail()}
                    </div>
                    <div>
                        <p className="text-sm font-semibold leading-tight line-clamp-2">{item.prompt}</p>
                         <p className="text-xs text-muted-foreground mt-1">{mode?.name}</p>
                    </div>
                </CardHeader>
            </Card>
        </button>
    )
};


export function SettingsPanel() {
  const { isSettingsPanelOpen, setIsSettingsPanelOpen, history, setActiveMode, model, setModel } = useModes();
  const { theme, setTheme } = useTheme();

  // Only take the most recent 20 items to display
  const recentHistory = history.slice(0, 20);

  return (
    <Sheet open={isSettingsPanelOpen} onOpenChange={setIsSettingsPanelOpen}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Settings & Dashboard</SheetTitle>
          <SheetDescription>
            Customize your experience and view your recent creations.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1 -mx-6">
            <div className="px-6 py-4 space-y-6">
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
                        Recent Creations
                    </h3>
                     {recentHistory.length > 0 ? (
                        <div className="grid grid-cols-1 gap-3">
                            {recentHistory.map(item => (
                                <HistoryCard key={item.id} item={item} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10 text-sm text-muted-foreground">
                            <BrainCircuit className="h-12 w-12 mx-auto opacity-30 mb-2"/>
                            No creations yet. Start using a mode to see your work here.
                        </div>
                    )}
                </div>
            </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
