"use client";

import { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { HistoryPanel } from "@/components/panels/HistoryPanel";
import { SettingsPanel } from "@/components/panels/SettingsPanel";
import { SignInModal } from "@/components/dialogs/SignInModal";
import { useModes } from '@/components/providers/ModeProvider';
import { modes } from '@/lib/modes';

export function Dashboard() {
  const { activeMode, setActiveMode, activeChat, setActiveChat } = useModes();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const currentMode = modes.find(m => m.id === activeMode);
  const ActiveComponent = currentMode?.component;

  const handleModeChange = (modeId: any) => {
    if (modeId !== 'chat') {
      setActiveChat([]);
    }
    setActiveMode(modeId);
  }

  return (
    <div className="flex h-screen w-full bg-secondary dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      {isSignInModalOpen && <SignInModal setIsOpen={setIsSignInModalOpen} />}
      <Sidebar activeMode={activeMode} setActiveMode={handleModeChange} />
      <div className="flex flex-col flex-1 relative">
        <Header setIsSignInModalOpen={setIsSignInModalOpen} activeModeName={currentMode?.name || 'Unimax AI'} />
        <main className="flex-1 overflow-y-auto bg-background dark:bg-background/50">
          {ActiveComponent && (
            <ActiveComponent 
              mode={currentMode} 
              key={activeMode}
              initialMessages={activeChat}
              setInitialMessages={setActiveChat}
              {...currentMode.componentProps}
            />
          )}
        </main>
        <HistoryPanel />
        <SettingsPanel />
      </div>
    </div>
  );
}
