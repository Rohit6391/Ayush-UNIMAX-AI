
"use client";

import { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { HistoryPanel } from "@/components/panels/HistoryPanel";
import { SettingsPanel } from "@/components/panels/SettingsPanel";
import { SignInModal } from "@/components/dialogs/SignInModal";
import { useModes } from '@/components/providers/ModeProvider';
import { modes } from '@/lib/modes';
import { Sidebar, SidebarContent, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { BrainCircuit, LogIn } from 'lucide-react';
import { useAuth } from './providers/AuthProvider';
import { Button } from './ui/button';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';

export function Dashboard() {
  const { activeMode, setActiveMode, activeChat, setActiveChat } = useModes();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const currentMode = modes.find(m => m.id === activeMode);
  const ActiveComponent = currentMode?.component;

  const handleModeChange = (modeId: any) => {
    if (modeId !== 'chat') {
      setActiveChat([]);
    }
    setActiveMode(modeId);
  }
  
  const handleGoogleSignIn = async () => {
    try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        toast({ title: "Signed in with Google successfully!"});
        setIsSignInModalOpen(false);
    } catch (err: any) {
        toast({ title: "Authentication Error", description: err.message, variant: 'destructive' });
    }
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-secondary dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
        {isSignInModalOpen && <SignInModal setIsOpen={setIsSignInModalOpen} />}
        
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2">
                <BrainCircuit className="h-8 w-8 text-primary" />
                <span className="font-bold font-headline text-xl">Ayush Unimax AI</span>
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
            <Header setIsSignInModalOpen={setIsSignInModalOpen} activeModeName={currentMode?.name || 'Ayush Unimax AI'} />
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
                         <Button onClick={handleGoogleSignIn} size="lg" variant="outline">
                            <svg className="mr-2 h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 21.5 174.3 57.9l-67.4 64.4C309.1 98.2 280.7 84 248 84c-83.8 0-152 68.2-152 152s68.2 152 152 152c93.2 0 135-67.6 140.8-105.3H248v-85.3h236.1c2.3 12.7 3.9 26.9 3.9 41.4z"></path></svg>
                            Sign In with Google
                        </Button>
                    </div>
                </div>
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
