"use client";
import { TextGenerator } from "./TextGenerator";

export function TermsAndConditionsWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Terms and conditions for a blog website.'"
            buttonText="Write T&C"
            generatePrompt={(prompt) => 
                `You are a legal AI assistant. Generate a basic terms and conditions template for the following type of service. Include standard clauses like 'Use of Service' and 'Limitation of Liability'. IMPORTANT: Add a clear disclaimer that this is a template and not a substitute for professional legal advice. Service: "${prompt}"`
            }
            resultTitle="Terms and Conditions"
        />
    );
}
