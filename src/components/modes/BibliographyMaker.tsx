"use client";
import { TextGenerator } from "./TextGenerator";

export function BibliographyMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Create a bibliography for a research paper on the Cold War.'"
            buttonText="Make Bibliography"
            generatePrompt={(p: string) => 
                `You are an academic librarian. Create a formatted bibliography based on the user's request. Request: "${p}"`
            }
            resultTitle="Bibliography"
        />
    );
}
