"use client";
import { TextGenerator } from "./TextGenerator";

export function BacklinkQualityAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a URL to analyze its backlink quality."
            buttonText="Generate Backlink Quality"
            generatePrompt={(prompt) => `Analyze backlink quality: "${prompt}"`}
            resultTitle="Generated Backlink Quality"
        />
    );
}
