
"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useModes } from '@/components/providers/ModeProvider';
import { BrainCircuit } from "lucide-react";
import { Separator } from "../ui/separator";
import { AboutAiChat } from "./AboutAiChat";
import { ScrollArea } from "../ui/scroll-area";

export function AboutPanel() {
  const { isAboutPanelOpen, setIsAboutPanelOpen } = useModes();

  return (
    <Sheet open={isAboutPanelOpen} onOpenChange={setIsAboutPanelOpen}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>About Ayush Unimax AI Studio</SheetTitle>
          <SheetDescription>
            Your Universal AI Assistant for creativity and productivity.
          </SheetDescription>
        </SheetHeader>
        
        <ScrollArea className="flex-1 -mx-6">
          <div className="px-6 py-4 space-y-6 text-sm text-muted-foreground">
              <div className="flex flex-col items-center text-center">
                  <BrainCircuit className="h-16 w-16 text-primary mb-4" />
                  <p className="font-semibold text-foreground">Version 1.0.0</p>
                  <p>Developed with passion by Ayush Sharma.</p>
              </div>

              <Separator />
              
              <div className="space-y-4">
                  <p>
                      Welcome to <span className="font-semibold text-foreground">Ayush Unimax AI Studio</span>, an all-in-one platform designed to be your universal AI partner. Whether you're a developer, a writer, a designer, a student, or a business professional, Unimax AI has a tool to help you achieve your goals faster and more efficiently.
                  </p>
                  <p>
                      This application leverages cutting-edge generative AI models to provide intelligent assistance across a vast range of tasks. Explore the different modes in the sidebar to discover all the ways Unimax AI can help you create, innovate, and learn.
                  </p>
              </div>

              <Separator />

              <div>
                  <h4 className="font-semibold text-foreground mb-2">Ask About The AI</h4>
                  <AboutAiChat />
              </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
