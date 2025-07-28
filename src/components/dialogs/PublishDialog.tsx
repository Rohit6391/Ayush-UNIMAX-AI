"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Terminal, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

interface PublishDialogProps {
  setIsOpen: (isOpen: boolean) => void;
  siteContent: string;
}

export function PublishDialog({ setIsOpen, siteContent }: PublishDialogProps) {
  const [copied, setCopied] = useState<Record<string, boolean>>({});

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(prev => ({...prev, [id]: true}));
      setTimeout(() => setCopied(prev => ({...prev, [id]: false})), 2000);
    });
  };
  
  const handleDownload = () => {
    const blob = new Blob([siteContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const CodeBlock = ({ id, command }: { id: string, command: string }) => (
    <div className="relative font-mono text-sm p-3 bg-muted rounded-md text-muted-foreground flex items-center justify-between">
      <span>$ {command}</span>
      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleCopy(id, command)}>
        {copied[id] ? <Check size={16} className="text-primary"/> : <Copy size={16} />}
      </Button>
    </div>
  );

  return (
    <Dialog open onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Publish to Firebase Hosting</DialogTitle>
          <DialogDescription>
            Follow these steps to deploy your website to a live URL.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 text-sm max-h-[70vh] overflow-y-auto pr-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Step 1: Install Firebase CLI</h3>
            <p>If you don't have it installed, open your terminal and run this command:</p>
            <CodeBlock id="npm" command="npm install -g firebase-tools" />
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Step 2: Initialize Firebase</h3>
            <p>Navigate to your project's root directory in the terminal and run:</p>
            <CodeBlock id="login" command="firebase login" />
            <p>Then, initialize hosting:</p>
            <CodeBlock id="init" command="firebase init hosting" />
            <p>During the setup:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Select an existing Firebase project when prompted.</li>
                <li>When asked for your public directory, enter <code className="bg-muted px-1 py-0.5 rounded-sm">public</code>.</li>
                <li>When asked to configure as a single-page app, you can choose <code className="bg-muted px-1 py-0.5 rounded-sm">No</code>.</li>
                <li>Do not overwrite the `index.html` file if it exists.</li>
            </ul>
          </div>
          
           <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Project Setup</AlertTitle>
            <AlertDescription>
              These `init` commands only need to be run once per project. If you've already set up hosting, you can skip to Step 3.
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Step 3: Add Your Website File</h3>
            <p>Download the generated HTML and save it inside the <code className="bg-muted px-1 py-0.5 rounded-sm">public</code> folder in your project. Name the file <code className="bg-muted px-1 py-0.5 rounded-sm">index.html</code>.</p>
            <Button onClick={handleDownload} className="mt-2">Download index.html</Button>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Step 4: Deploy!</h3>
            <p>Run the deploy command from your project's root directory:</p>
            <CodeBlock id="deploy" command="firebase deploy --only hosting" />
          </div>
          
           <div className="space-y-2">
            <h3 className="font-semibold text-lg">Step 5: (Optional) Custom Domain</h3>
            <p>
              After deploying, you can connect a custom domain by visiting the Firebase console. For more details, check out the official documentation.
            </p>
            <a href="https://firebase.google.com/docs/hosting/custom-domain" target="_blank" rel="noopener noreferrer">
                <Button variant="link">Firebase Custom Domain Docs</Button>
            </a>
           </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
