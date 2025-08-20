
"use client";
import { TextGenerator } from "./TextGenerator";

export function CustomerSupportScript({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A script for handling a customer complaint about a billing error.'"
            buttonText="Create Support Script"
            generatePrompt={(p: string) => 
                `You are a customer support manager. Write a polite and effective script for a support agent to handle the following scenario. Include an opening, empathy statements, and steps to resolution. Scenario: "${p}"`
            }
            resultTitle="Customer Support Script"
        />
    );
}
