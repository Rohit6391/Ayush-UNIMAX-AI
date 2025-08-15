"use client";
import { TextGenerator } from "./TextGenerator";

export function QuoteFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'quotes about creativity' or 'inspirational quotes for students'"
            buttonText="Find Quotes"
            generatePrompt={(prompt) => 
                `You are a librarian. Suggest three inspiring or relevant quotes for the given topic. Include the author for each quote. Topic: "${prompt}"`
            }
            resultTitle="Quotes"
        />
    );
}
