
"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useModes } from '@/components/providers/ModeProvider';
import { BrainCircuit } from "lucide-react";
import { Separator } from "../ui/separator";

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
        
        <div className="flex-1 py-4 space-y-6 text-sm text-muted-foreground">
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
                    Our mission is to provide a comprehensive suite of AI-powered tools that are both powerful and easy to use. From generating code and creating websites to writing songs and analyzing data, Unimax AI is built to handle it all.
                </p>
                <p>
                    This application leverages cutting-edge generative AI models to provide intelligent assistance across a vast range of tasks. Explore the different modes in the sidebar to discover all the ways Unimax AI can help you create, innovate, and learn.
                </p>
            </div>

             <Separator />

            <div>
                <h4 className="font-semibold text-foreground mb-2">Contact & Support</h4>
                <p>For questions, support, or feedback, please reach out to Ayush Webtor Studio.</p>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
