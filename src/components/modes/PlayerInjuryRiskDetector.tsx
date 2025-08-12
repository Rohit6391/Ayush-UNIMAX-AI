"use client";
import { TextGenerator } from "./TextGenerator";

export function PlayerInjuryRiskDetector({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide player data to detect injury risk."
            buttonText="Generate Injury Risk Analysis"
            generatePrompt={(prompt) => `Detect player injury risk: "${prompt}"`}
            resultTitle="Generated Injury Risk Analysis"
        />
    );
}
