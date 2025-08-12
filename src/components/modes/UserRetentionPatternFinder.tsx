"use client";
import { TextGenerator } from "./TextGenerator";

export function UserRetentionPatternFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide user data to find retention patterns."
            buttonText="Generate User Retention Patterns"
            generatePrompt={(prompt) => `Find user retention patterns: "${prompt}"`}
            resultTitle="Generated User Retention Patterns"
        />
    );
}
