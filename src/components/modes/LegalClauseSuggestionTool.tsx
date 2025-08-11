"use client";
import { TextGenerator } from "./TextGenerator";

export function LegalClauseSuggestionTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Suggest a confidentiality clause for an NDA' or 'Provide an indemnification clause for a service agreement.'"
            buttonText="Suggest Clause"
            generatePrompt={(prompt) => 
                `You are a legal AI assistant. Based on the following request, provide a standard, well-formulated legal clause. IMPORTANT: Include a disclaimer that this is not legal advice and a qualified attorney should be consulted. Request: "${prompt}"`
            }
            resultTitle="Suggested Legal Clause"
        />
    );
}
