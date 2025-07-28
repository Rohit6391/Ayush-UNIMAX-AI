"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export function MakerOptions() {
    return (
        <Tabs defaultValue="prompt" className="w-full mb-4">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="prompt">Make with AI</TabsTrigger>
                <TabsTrigger value="url">Import from URL</TabsTrigger>
                <TabsTrigger value="code">Code your own</TabsTrigger>
            </TabsList>
            <TabsContent value="prompt">
                {/* Content is outside, this is just for the tab */}
            </TabsContent>
            <TabsContent value="url">
                <div className="space-y-2 text-left">
                    <Label htmlFor="url-input">Import from URL</Label>
                    <Input id="url-input" placeholder="https://example.com" />
                    <Button className="w-full">Import</Button>
                </div>
            </TabsContent>
            <TabsContent value="code">
                <div className="space-y-2 text-left">
                     <Label htmlFor="code-input">Paste your code here</Label>
                    <Textarea id="code-input" placeholder="<p>Hello world</p>" rows={8}/>
                    <Button className="w-full">Create</Button>
                </div>
            </TabsContent>
        </Tabs>
    )
}
