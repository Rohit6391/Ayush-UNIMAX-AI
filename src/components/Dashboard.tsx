"use client";

import { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { HistoryPanel } from "@/components/panels/HistoryPanel";
import { SettingsPanel } from "@/components/panels/SettingsPanel";
import { SignInModal } from "@/components/dialogs/SignInModal";
import { useModes } from '@/components/providers/ModeProvider';
import { modes } from '@/lib/modes';
import { Sidebar, SidebarContent, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { BrainCircuit } from 'lucide-react';
import { useAuth } from './providers/AuthProvider';

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
    <SidebarProvider>
      <div className="flex h-screen w-full bg-secondary dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
        {isSignInModalOpen && <SignInModal setIsOpen={setIsSignInModalOpen} />}
        
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2">
                <BrainCircuit className="h-8 w-8 text-primary" />
                <span className="font-bold font-headline text-xl">Unimax AI</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {modes.map(mode => (
                <SidebarMenuItem key={mode.id}>
                  <SidebarMenuButton
                    onClick={() => handleModeChange(mode.id)}
                    isActive={activeMode === mode.id}
                    tooltip={{children: mode.name, side: "right", align:"start"}}
                  >
                    <mode.icon />
                    <span>{mode.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <SidebarInset>
          <div className="flex flex-col flex-1 relative h-screen">
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
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
