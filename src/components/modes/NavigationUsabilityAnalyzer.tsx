"use client";
import { TextGenerator } from "./TextGenerator";

export function NavigationUsabilityAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a URL to analyze its navigation usability."
            buttonText="Generate Navigation Usability"
            generatePrompt={(prompt) => `Analyze navigation usability: "${prompt}"`}
            resultTitle="Generated Navigation Usability"
        />
    );
}
