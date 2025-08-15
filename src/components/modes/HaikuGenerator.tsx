"use client";
import { TextGenerator } from "./TextGenerator";

export function HaikuGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Write a haiku about winter'"
            buttonText="Generate Haiku"
            generatePrompt={(prompt) => 
                `You are a poet. Write a haiku (5-7-5 syllables) based on the following theme: "${prompt}"`
            }
            resultTitle="Generated Haiku"
        />
    );
}
