"use client";
import { TextGenerator } from "./TextGenerator";

export function StyleGuideComplianceChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload text and a style guide to check for compliance."
            buttonText="Generate Style Guide Compliance"
            generatePrompt={(prompt) => `Check style guide compliance: "${prompt}"`}
            resultTitle="Generated Style Guide Compliance"
        />
    );
}
