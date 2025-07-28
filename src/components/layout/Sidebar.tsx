"use client";

import { BrainCircuit, Menu } from 'lucide-react';
import { modes, ModeId } from '@/lib/modes';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarProps {
  activeMode: ModeId;
  setActiveMode: (mode: ModeId) => void;
}

const NavContent = ({ activeMode, setActiveMode }: SidebarProps) => (
  <>
    <div className="flex items-center gap-2 mb-6 p-4">
      <BrainCircuit className="h-8 w-8 text-primary" />
      <h1 className="text-2xl font-headline font-bold">Unimax AI</h1>
    </div>
    <ScrollArea className="flex-1">
      <ul className="space-y-1 px-4">
        {modes.map(mode => (
          <li key={mode.id}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveMode(mode.id);
              }}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
                activeMode === mode.id
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted dark:hover:bg-muted/50'
              }`}
            >
              <mode.icon className="h-5 w-5" />
              <span>{mode.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </ScrollArea>
  </>
);

export function Sidebar({ activeMode, setActiveMode }: SidebarProps) {
  return (
    <>
      {/* Mobile Sidebar */}
      <div className="md:hidden absolute top-3 left-3 z-30">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0 flex flex-col bg-card">
            <NavContent activeMode={activeMode} setActiveMode={setActiveMode} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <nav className="w-72 bg-card/80 dark:bg-card/80 backdrop-blur-sm border-r border-border/50 flex-col h-full hidden md:flex">
        <NavContent activeMode={activeMode} setActiveMode={setActiveMode} />
      </nav>
    </>
  );
}
