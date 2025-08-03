
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertTriangle } from "lucide-react";

interface MakerOptionsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    onCodeCreate: (code: string) => void;
    onUrlImport: (url: string) => void;
    isImporting?: boolean;
}

export function MakerOptions({ activeTab, onTabChange, onCodeCreate, onUrlImport, isImporting }: MakerOptionsProps) {
    const [pastedCode, setPastedCode] = useState('');
    const [importUrl, setImportUrl] = useState('');
    const [urlError, setUrlError] = useState('');

    const handleCreateClick = () => {
        if (pastedCode) {
            onCodeCreate(pastedCode);
        }
    };
    
    const isValidUrl = (urlString: string) => {
        try {
            new URL(urlString);
            return true;
        } catch (e) {
            return false;
        }
    };

    const handleImportClick = () => {
        if (!importUrl) {
            setUrlError("Please enter a URL to import.");
            return;
        }
        if (!isValidUrl(importUrl)) {
            setUrlError("Please enter a valid URL, including http:// or https://.");
            return;
        }
        setUrlError('');
        onUrlImport(importUrl);
    };

    return (
        <Tabs value={activeTab} className="w-full mb-4" onValueChange={onTabChange}>
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="prompt">Make with AI</TabsTrigger>
                <TabsTrigger value="url">Import from URL</TabsTrigger>
                <TabsTrigger value="code">Code your own</TabsTrigger>
            </TabsList>
            <TabsContent value="prompt">
                {/* Content is rendered by parent component */}
            </TabsContent>
            <TabsContent value="url">
                <div className="space-y-2 text-left">
                    <Label htmlFor="url-input">Import from a raw URL</Label>
                    <Input 
                        id="url-input" 
                        placeholder="e.g., https://mysite.com/index.html" 
                        value={importUrl}
                        onChange={(e) => {
                            setImportUrl(e.target.value);
                            if (urlError) setUrlError('');
                        }}
                        disabled={isImporting}
                    />
                    {urlError && (
                        <Alert variant="destructive" className="p-2">
                           <div className="flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4" />
                                <AlertDescription className="text-xs">
                                    {urlError}
                                </AlertDescription>
                           </div>
                        </Alert>
                    )}
                    <Button className="w-full" onClick={handleImportClick} disabled={isImporting}>
                        {isImporting ? 'Importing...' : 'Import'}
                    </Button>
                </div>
            </TabsContent>
            <TabsContent value="code">
                <div className="space-y-2 text-left">
                     <Label htmlFor="code-input">Paste your code here</Label>
                    <Textarea 
                        id="code-input" 
                        placeholder="<!DOCTYPE html>
<html>
<body>
  <h1>Hello World</h1>
</body>
</html>"
                        rows={8}
                        value={pastedCode}
                        onChange={(e) => setPastedCode(e.target.value)}
                    />
                    <Button className="w-full" onClick={handleCreateClick}>Create</Button>
                </div>
            </TabsContent>
        </Tabs>
    )
}
