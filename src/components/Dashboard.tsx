
"use client";

import { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { HistoryPanel } from "@/components/panels/HistoryPanel";
import { SettingsPanel } from "@/components/panels/SettingsPanel";
import { AboutPanel } from "@/components/panels/AboutPanel";
import { SignInModal } from "@/components/dialogs/SignInModal";
import { useModes } from '@/components/providers/ModeProvider';
import { modes } from '@/lib/modes';
import { Sidebar, SidebarContent, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { BrainCircuit, LogIn, Search } from 'lucide-react';
import { useAuth } from './providers/AuthProvider';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Dashboard() {
  const { activeMode, setActiveMode, activeChat, setActiveChat } = useModes();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  const currentMode = modes.find(m => m.id === activeMode);
  const ActiveComponent = currentMode?.component;

  const handleModeChange = (modeId: any) => {
    if (activeMode !== modeId) {
        setActiveChat([]);
    }
    setActiveMode(modeId);
  }
  
  const filteredModes = modes.filter(mode =>
    mode.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex h-screen w-full bg-secondary dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
        {isSignInModalOpen && <SignInModal isOpen={isSignInModalOpen} setIsOpen={setIsSignInModalOpen} />}
        
        <Sidebar collapsible="icon">
          <SidebarHeader>
              <div className="flex items-center gap-2 [&>span]:opacity-100 group-data-[collapsible=icon]:[&>span]:opacity-0">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                  <span className="font-bold font-headline text-xl">Ayush Unimax AI</span>
              </div>
          </SidebarHeader>
          <SidebarContent>
            <div className="p-2 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:pt-2">
                <div className="relative">
                    <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground group-data-[collapsible=icon]:left-1/2 group-data-[collapsible=icon]:-translate-x-1/2">
                        <Search/>
                    </div>
                    <Input
                        type="search"
                        placeholder="Search modes..."
                        className="w-full rounded-lg bg-background pl-8 group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <SidebarMenu>
              {filteredModes.map(mode => (
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
            <Header setIsSignInModalOpen={setIsSignInModalOpen} activeModeName={currentMode?.name || 'Ayush Unimax AI Studio'} />
            <main className="flex-1 overflow-y-auto bg-background dark:bg-background/50">
              {user && ActiveComponent && (
                <ActiveComponent 
                  mode={currentMode} 
                  key={activeMode}
                  initialMessages={activeChat}
                  setInitialMessages={setActiveChat}
                  {...currentMode.componentProps}
                />
              )}
              {!user && (
                 <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-background">
                    <BrainCircuit className="h-24 w-24 text-primary opacity-20 mb-4" />
                    <h2 className="text-3xl font-bold font-headline mb-2">Welcome to Ayush Unimax AI Studio</h2>
                    <p className="text-muted-foreground mb-6 max-w-md">
                        Your universal assistant for creativity and productivity. Please sign in to access all features.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button onClick={() => setIsSignInModalOpen(true)} size="lg">
                            <LogIn className="mr-2" />
                            Sign In / Register
                        </Button>
                    </div>
                </div>
              )}
            </main>
            <HistoryPanel />
            <SettingsPanel />
            <AboutPanel />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
