"use client";
import { TextGenerator } from "./TextGenerator";

export function ShortStoryWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A short story about a talking cat.'"
            buttonText="Write Story"
            generatePrompt={(prompt) => 
                `You are a creative writer. Write a complete short story (a few paragraphs) with a beginning, middle, and end, based on the following prompt. Prompt: "${prompt}"`
            }
            resultTitle="Short Story"
        />
    );
}
