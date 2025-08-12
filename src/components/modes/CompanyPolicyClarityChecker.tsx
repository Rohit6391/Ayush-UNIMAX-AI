"use client";
import { TextGenerator } from "./TextGenerator";

export function CompanyPolicyClarityChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a company policy to check its clarity."
            buttonText="Generate Policy Clarity"
            generatePrompt={(prompt) => `Check policy clarity: "${prompt}"`}
            resultTitle="Generated Policy Clarity"
        />
    );
}
