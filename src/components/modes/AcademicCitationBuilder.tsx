"use client";
import { TextGenerator } from "./TextGenerator";

export function AcademicCitationBuilder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide source details (authors, title, year, publication) and the desired style (e.g., APA, MLA)."
            buttonText="Build Citation"
            generatePrompt={(prompt) => 
                `You are a librarian and citation expert. Generate a perfectly formatted academic citation in the specified style based on the provided source details. Details: "${prompt}"`
            }
            resultTitle="Academic Citation"
        />
    );
}
