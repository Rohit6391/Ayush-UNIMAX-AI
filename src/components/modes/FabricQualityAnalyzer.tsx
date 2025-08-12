"use client";
import { TextGenerator } from "./TextGenerator";

export function FabricQualityAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a fabric to analyze its quality."
            buttonText="Generate Fabric Quality Analysis"
            generatePrompt={(prompt) => `Analyze fabric quality: "${prompt}"`}
            resultTitle="Generated Fabric Quality Analysis"
        />
    );
}
