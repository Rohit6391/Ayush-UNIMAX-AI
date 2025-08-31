
"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useModes } from '@/components/providers/ModeProvider';
import { BrainCircuit } from "lucide-react";
import { Separator } from "../ui/separator";
import { AboutAiChat } from "./AboutAiChat";

export function AboutPanel() {
  const { isAboutPanelOpen, setIsAboutPanelOpen } = useModes();

  return (
    <Sheet open={isAboutPanelOpen} onOpenChange={setIsAboutPanelOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-lg">
        <SheetHeader className="pr-8">
          <SheetTitle>About Ayush Unimax AI Studio</SheetTitle>
          <SheetDescription>
            Your Universal AI Assistant for creativity and productivity.
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex-1 py-4 space-y-6 text-sm text-muted-foreground overflow-y-auto pr-2">
            <div className="flex flex-col items-center text-center">
                <BrainCircuit className="h-16 w-16 text-primary mb-4" />
                <p className="font-semibold text-foreground">Version 1.0.0</p>
                <p>Developed with passion by Ayush Sharma.</p>
            </div>

            <Separator />
            
            <div className="space-y-4 text-left px-2">
                <p>
                    Welcome to <span className="font-semibold text-foreground">Ayush Unimax AI Studio</span>, an all-in-one platform designed to be your universal AI partner. Whether you're a developer, a writer, a designer, a student, or a business professional, Unimax AI has a tool to help you achieve your goals faster and more efficiently.
                </p>
                <p>
                    Our mission is to provide a comprehensive suite of AI-powered tools that are both powerful and easy to use. From generating code and creating websites to writing songs and analyzing data, Unimax AI is built to handle it all.
                </p>
            </div>

             <Separator />

            <div className="px-2">
                <h4 className="font-semibold text-foreground mb-4 text-center">Ask me about the AI Studio</h4>
                <AboutAiChat />
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
