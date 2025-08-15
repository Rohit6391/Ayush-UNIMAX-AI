"use client";
import { TextGenerator } from "./TextGenerator";

export function NarrativeStyleChanger({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste a short paragraph and the desired style, e.g., 'Make this more poetic.'"
            buttonText="Change Style"
            generatePrompt={(prompt) => 
                `You are an expert editor. Rewrite the following text in the specified narrative style, while keeping the core events the same. Text and Style: "${prompt}"`
            }
            resultTitle="Rewritten Narrative"
        />
    );
}
