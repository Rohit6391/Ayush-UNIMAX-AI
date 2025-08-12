"use client";
import { TextGenerator } from "./TextGenerator";

export function PersonalizationRuleOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe personalization rules to optimize them."
            buttonText="Generate Optimized Personalization"
            generatePrompt={(prompt) => `Optimize personalization rules: "${prompt}"`}
            resultTitle="Generated Optimized Personalization"
        />
    );
}
