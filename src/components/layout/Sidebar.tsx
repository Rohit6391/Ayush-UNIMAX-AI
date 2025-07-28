"use client";

import { BrainCircuit } from 'lucide-react';
import { modes, ModeId } from '@/lib/modes';
import { useSidebar, Sidebar, SidebarProvider, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import { useAuth } from '../providers/AuthProvider';
import { Button } from '../ui/button';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { User, LogOut } from 'lucide-react';

interface SidebarProps {
  activeMode: ModeId;
  setActiveMode: (mode: ModeId) => void;
  children: React.ReactNode;
}

const NavContent = () => {
  const { activeMode, setActiveMode } = useModes();
  const { user } = useAuth();
  
  const handleSignOut = async () => {
    await signOut(auth);
  };
  
  return (
    <SidebarProvider>
        <Sidebar>
            <SidebarHeader>
                <div className="flex items-center gap-2">
                    <BrainCircuit className="h-8 w-8 text-primary" />
                    <h1 className="text-2xl font-headline font-bold">Unimax AI</h1>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {modes.map(mode => (
                        <SidebarMenuItem key={mode.id}>
                            <SidebarMenuButton
                                onClick={() => setActiveMode(mode.id)}
                                isActive={activeMode === mode.id}
                                tooltip={{children: mode.name}}
                            >
                                <mode.icon />
                                <span>{mode.name}</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            {user && (
                <SidebarFooter>
                  <div className="w-full flex items-center justify-between p-2">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.photoURL || undefined} />
                        <AvatarFallback><User size={16}/></AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-sm truncate">{user.email}</span>
                    </div>
                    <Button onClick={handleSignOut} variant="ghost" size="icon" title="Sign Out" className="text-destructive flex-shrink-0 hover:bg-destructive/10 hover:text-destructive">
                      <LogOut />
                    </Button>
                  </div>
                </SidebarFooter>
            )}
        </Sidebar>
        <SidebarInset>
            {children}
        </SidebarInset>
    </SidebarProvider>
  )
}


export function AppSidebar({ activeMode, setActiveMode, children }: SidebarProps) {
    const { user } = useAuth();
    const { setOpenMobile } = useSidebar();
    const handleModeChange = (modeId: ModeId) => {
        setActiveMode(modeId);
        setOpenMobile(false);
    }
    return (
        <NavContent/>
    )
}
