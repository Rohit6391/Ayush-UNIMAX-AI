"use client";
import { TextGenerator } from "./TextGenerator";

export function BookGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A fantasy novel about a young dragon rider' or 'A short non-fiction book about the history of the internet.'"
            buttonText="Generate Book"
            generatePrompt={(prompt) => 
                `You are a professional author. Write the beginning of a book based on the following prompt. Include a title, chapter 1, and the first few paragraphs to set the scene and introduce the main characters. Prompt: "${prompt}"`
            }
            resultTitle="Generated Book"
        />
    );
}
