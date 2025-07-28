"use client";

import { useModes } from "@/components/providers/ModeProvider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export function HistoryPanel() {
  const { isHistoryPanelOpen, setIsHistoryPanelOpen, history, clearHistory, loadHistoryItem } = useModes();

  return (
    <Sheet open={isHistoryPanelOpen} onOpenChange={setIsHistoryPanelOpen}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>History</SheetTitle>
          <SheetDescription>
            Review your past interactions. Click an item to load it.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1 -mx-6">
          <div className="px-6 space-y-4">
            {history.length > 0 ? (
              history.map((item) => (
                <button
                  key={item.id}
                  onClick={() => loadHistoryItem(item)}
                  className="w-full text-left p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors block"
                >
                  <p className="font-semibold truncate">{item.prompt}</p>
                  <p className="text-xs text-muted-foreground">{item.type} &middot; {formatDistanceToNow(item.date, { addSuffix: true })}</p>
                </button>
              ))
            ) : (
              <div className="text-center text-muted-foreground py-10">
                No history yet.
              </div>
            )}
          </div>
        </ScrollArea>
        {history.length > 0 && (
          <SheetFooter>
            <Button variant="destructive" onClick={clearHistory} className="w-full">
              <Trash2 className="mr-2 h-4 w-4" /> Clear History
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
