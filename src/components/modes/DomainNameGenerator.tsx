"use client";
import { TextGenerator } from "./TextGenerator";

export function DomainNameGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A domain name for a pet-sitting business.'"
            buttonText="Generate Domain Names"
            generatePrompt={(prompt) => 
                `You are a domain name generator. Suggest 5 available-sounding domain names (using .com, .io, .ai) for the following business idea. Idea: "${prompt}"`
            }
            resultTitle="Domain Name Suggestions"
        />
    );
}
