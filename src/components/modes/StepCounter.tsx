"use client";
import { TextGenerator } from "./TextGenerator";

export function StepCounter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'I walked 7,500 steps today.'"
            buttonText="Log Steps"
            generatePrompt={(prompt) => 
                `You are a fitness log. Create a confirmation entry for the number of steps walked. Entry: "${prompt}"`
            }
            resultTitle="Steps Logged"
        />
    );
}
