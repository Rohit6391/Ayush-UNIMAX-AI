"use client";
import { TextGenerator } from "./TextGenerator";

export function AppNameGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A fitness tracking app for runners'"
            buttonText="Generate App Names"
            generatePrompt={(prompt) => 
                `You are a branding expert. Suggest 10 creative and available-sounding names for a mobile app with the following description: "${prompt}"`
            }
            resultTitle="App Name Ideas"
        />
    );
}
