"use client";
import { TextGenerator } from "./TextGenerator";

export function RegistrationDataAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide registration data to analyze."
            buttonText="Generate Registration Analysis"
            generatePrompt={(prompt) => `Analyze registration data: "${prompt}"`}
            resultTitle="Generated Registration Analysis"
        />
    );
}
