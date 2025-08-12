"use client";
import { TextGenerator } from "./TextGenerator";

export function CompetitorAdCopyAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a competitor's ad copy to analyze it."
            buttonText="Generate Ad Copy Analysis"
            generatePrompt={(prompt) => `Analyze competitor ad copy: "${prompt}"`}
            resultTitle="Generated Ad Copy Analysis"
        />
    );
}
