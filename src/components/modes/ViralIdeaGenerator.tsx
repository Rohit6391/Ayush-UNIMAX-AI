"use client";
import { TextGenerator } from "./TextGenerator";

export function ViralIdeaGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Viral video ideas for a new energy drink' or 'A trending challenge for TikTok'"
            buttonText="Generate Ideas"
            generatePrompt={(p: string) => 
                `You are a viral marketing expert. Suggest three creative and shareable content ideas that have the potential to go viral for the following topic or brand. Topic/Brand: "${p}"`
            }
            resultTitle="Viral Content Ideas"
        />
    );
}
