"use client";
import { TextGenerator } from "./TextGenerator";

export function ProductReturnRiskDetector({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide product data to detect return risk."
            buttonText="Generate Return Risk Analysis"
            generatePrompt={(prompt) => `Detect product return risk: "${prompt}"`}
            resultTitle="Generated Return Risk Analysis"
        />
    );
}
