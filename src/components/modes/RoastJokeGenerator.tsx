"use client";
import { TextGenerator } from "./TextGenerator";

export function RoastJokeGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Roast a friend who is always late.'"
            buttonText="Generate Roast Joke"
            generatePrompt={(prompt) => 
                `You are a witty comedian. Create a short, light-hearted roast joke (not mean-spirited) about the following topic. Topic: "${prompt}"`
            }
            resultTitle="Roast Joke"
        />
    );
}
