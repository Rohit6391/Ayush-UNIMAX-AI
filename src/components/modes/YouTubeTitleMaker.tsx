"use client";
import { TextGenerator } from "./TextGenerator";

export function YouTubeTitleMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A video about making homemade pizza'"
            buttonText="Make Titles"
            generatePrompt={(prompt) => 
                `You are a YouTube content strategist. Suggest 5 catchy, clickable, and SEO-friendly titles for a YouTube video on the following topic. Topic: "${prompt}"`
            }
            resultTitle="Suggested YouTube Titles"
        />
    );
}
