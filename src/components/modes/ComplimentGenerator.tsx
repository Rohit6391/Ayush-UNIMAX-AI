"use client";
import { TextGenerator } from "./TextGenerator";

export function ComplimentGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A compliment for a friend who is a great listener.'"
            buttonText="Generate Compliment"
            generatePrompt={(prompt) => 
                `You are a positive and encouraging friend. Generate 3 unique and sincere compliments based on the following description. Description: "${prompt}"`
            }
            resultTitle="Generated Compliments"
        />
    );
}
