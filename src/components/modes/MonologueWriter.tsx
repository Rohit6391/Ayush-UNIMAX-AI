"use client";
import { TextGenerator } from "./TextGenerator";

export function MonologueWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A villain explaining their evil plan'"
            buttonText="Write Monologue"
            generatePrompt={(prompt) => 
                `You are a playwright. Write a compelling and character-driven monologue based on the following theme or character description: "${prompt}"`
            }
            resultTitle="Generated Monologue"
        />
    );
}
