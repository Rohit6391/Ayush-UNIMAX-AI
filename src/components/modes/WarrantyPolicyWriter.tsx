"use client";
import { TextGenerator } from "./TextGenerator";

export function WarrantyPolicyWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 1-year limited warranty for an electronic device.'"
            buttonText="Write Warranty Policy"
            generatePrompt={(p: string) => 
                `You are a legal writer. Draft a simple, plain-language warranty policy based on the user's request. Include what is covered, the duration, and how to make a claim. IMPORTANT: Add a disclaimer that this is a template and not legal advice. Request: "${p}"`
            }
            resultTitle="Warranty Policy"
        />
    );
}
