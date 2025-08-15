"use client";
import { TextGenerator } from "./TextGenerator";

export function MysteryStoryGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A stolen diamond at a high-society party.'"
            buttonText="Generate Mystery"
            generatePrompt={(prompt) => 
                `You are a mystery writer. Create a short plot outline for a mystery story, including the crime, the main detective, key clues, and a surprising twist. Prompt: "${prompt}"`
            }
            resultTitle="Mystery Plot"
        />
    );
}
