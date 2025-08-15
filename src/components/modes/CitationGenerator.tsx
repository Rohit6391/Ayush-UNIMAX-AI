"use client";
import { TextGenerator } from "./TextGenerator";

export function CitationGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Generate an APA citation for the book 'Sapiens' by Yuval Noah Harari.'"
            buttonText="Generate Citation"
            generatePrompt={(prompt) => 
                `You are a librarian. Generate a citation in the specified format (e.g., APA, MLA, Chicago) for the following source. Request: "${prompt}"`
            }
            resultTitle="Generated Citation"
        />
    );
}
