"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface MakerOptionsProps {
    onTabChange: (tab: string) => void;
    onCodeCreate: (code: string) => void;
}

export function MakerOptions({ onTabChange, onCodeCreate }: MakerOptionsProps) {
    const [pastedCode, setPastedCode] = useState('');

    const handleCreateClick = () => {
        if (pastedCode) {
            onCodeCreate(pastedCode);
        }
    };

    return (
        <Tabs defaultValue="prompt" className="w-full mb-4" onValueChange={onTabChange}>
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="prompt">Make with AI</TabsTrigger>
                <TabsTrigger value="url" disabled>Import from URL</TabsTrigger>
                <TabsTrigger value="code">Code your own</TabsTrigger>
            </TabsList>
            <TabsContent value="prompt">
                {/* Content is rendered by parent component */}
            </TabsContent>
            <TabsContent value="url">
                <div className="space-y-2 text-left">
                    <Label htmlFor="url-input">Import from URL</Label>
                    <Input id="url-input" placeholder="https://example.com" disabled />
                    <Button className="w-full" disabled>Import</Button>
                </div>
            </TabsContent>
            <TabsContent value="code">
                <div className="space-y-2 text-left">
                     <Label htmlFor="code-input">Paste your code here</Label>
                    <Textarea 
                        id="code-input" 
                        placeholder="<p>Hello world</p>" 
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
