"use client";
import { TextGenerator } from "./TextGenerator";

export function ViralIdeaGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Viral video ideas for a new energy drink' or 'A trending challenge for TikTok'"
            buttonText="Generate Ideas"
            generatePrompt={(prompt) => 
                `You are a viral marketing expert. Suggest three creative and shareable content ideas that have the potential to go viral for the following topic or brand. Topic/Brand: "${prompt}"`
            }
            resultTitle="Viral Content Ideas"
        />
    );
}
