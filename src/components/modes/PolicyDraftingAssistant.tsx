"use client";
import { TextGenerator } from "./TextGenerator";

export function PolicyDraftingAssistant({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Draft a remote work policy' or 'Create a social media usage policy for employees.'"
            buttonText="Draft Policy"
            generatePrompt={(prompt) => 
                `You are an HR and legal consultant. Draft a clear, comprehensive, and professional company policy based on the following request. Structure it with standard policy sections like Purpose, Scope, Policy Statement, and Procedures. Request: "${prompt}"`
            }
            resultTitle="Draft Policy"
        />
    );
}
