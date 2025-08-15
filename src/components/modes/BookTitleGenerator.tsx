"use client";
import { TextGenerator } from "./TextGenerator";

export function BookTitleGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A sci-fi novel about AI taking over the world'"
            buttonText="Generate Book Titles"
            generatePrompt={(prompt) => 
                `You are a professional author and editor. Suggest 10 compelling and original titles for a book with the following premise: "${prompt}"`
            }
            resultTitle="Book Title Ideas"
        />
    );
}
