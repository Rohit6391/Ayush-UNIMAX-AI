"use client";
import { TextGenerator } from "./TextGenerator";

export function LogoColorImpactAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a logo to analyze its color impact."
            buttonText="Generate Logo Color Impact"
            generatePrompt={(prompt) => `Analyze logo color impact: "${prompt}"`}
            resultTitle="Generated Logo Color Impact"
        />
    );
}
