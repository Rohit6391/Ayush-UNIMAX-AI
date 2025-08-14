
"use client";

import { useAuth } from '@/components/providers/AuthProvider';
import { useModes } from '@/components/providers/ModeProvider';
import { Button } from '@/components/ui/button';
import { History, LogOut, Settings, Info } from 'lucide-react';
import { SidebarTrigger } from '../ui/sidebar';

interface HeaderProps {
  setIsSignInModalOpen: (isOpen: boolean) => void;
  activeModeName: string;
}

export function Header({ setIsSignInModalOpen, activeModeName }: HeaderProps) {
  const { user, signOut } = useAuth();
  const { setIsHistoryPanelOpen, setIsSettingsPanelOpen, setIsAboutPanelOpen } = useModes();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="flex items-center justify-between p-4 bg-card/80 dark:bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-20 h-16 shrink-0">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden"/>
        <h1 className="text-xl md:text-2xl font-headline font-bold text-foreground">
          {activeModeName}
        </h1>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <Button onClick={() => setIsHistoryPanelOpen(p => !p)} variant="ghost" size="icon" title="History">
          <History className="h-5 w-5" />
        </Button>
        <Button onClick={() => setIsSettingsPanelOpen(p => !p)} variant="ghost" size="icon" title="Settings">
          <Settings className="h-5 w-5" />
        </Button>
        <Button onClick={() => setIsAboutPanelOpen(p => !p)} variant="ghost" size="icon" title="About">
          <Info className="h-5 w-5" />
        </Button>
        {user ? (
          <div className="flex items-center gap-2">
            <span className="font-medium hidden sm:inline text-sm">{user.email}</span>
            <Button onClick={handleSignOut} variant="ghost" size="icon" title="Sign Out" className="text-destructive hover:bg-destructive/10 hover:text-destructive">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        ) : (
          <Button onClick={() => setIsSignInModalOpen(true)}>Sign In</Button>
        )}
      </div>
    </header>
  );
}
