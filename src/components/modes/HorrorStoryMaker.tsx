"use client";
import { TextGenerator } from "./TextGenerator";

export function HorrorStoryMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A story about a mysterious noise in an old house.'"
            buttonText="Make Horror Story"
            generatePrompt={(prompt) => 
                `You are a horror writer. Write a short, scary story designed to build suspense and create a sense of dread. Prompt: "${prompt}"`
            }
            resultTitle="Horror Story"
        />
    );
}
