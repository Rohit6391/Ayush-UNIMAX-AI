"use client";
import { TextGenerator } from "./TextGenerator";

export function LoveLetterWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A short love letter to my partner of 5 years.'"
            buttonText="Write Love Letter"
            generatePrompt={(prompt) => 
                `You are a romantic poet. Write a short, heartfelt, and romantic letter based on the following prompt. Prompt: "${prompt}"`
            }
            resultTitle="Love Letter"
        />
    );
}
