"use client";
import { TextGenerator } from "./TextGenerator";

export function WebsiteAccessibilityAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a URL to analyze website accessibility."
            buttonText="Generate Accessibility Analysis"
            generatePrompt={(prompt) => `Analyze website accessibility: "${prompt}"`}
            resultTitle="Generated Accessibility Analysis"
        />
    );
}
