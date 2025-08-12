"use client";
import { TextGenerator } from "./TextGenerator";

export function SupportTicketCategorizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload support tickets to categorize them."
            buttonText="Generate Ticket Categorization"
            generatePrompt={(prompt) => `Categorize support tickets: "${prompt}"`}
            resultTitle="Generated Ticket Categorization"
        />
    );
}
