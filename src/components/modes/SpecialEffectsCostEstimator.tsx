"use client";
import { TextGenerator } from "./TextGenerator";

export function SpecialEffectsCostEstimator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe special effects to estimate their cost."
            buttonText="Generate SFX Cost Estimate"
            generatePrompt={(prompt) => `Estimate special effects cost: "${prompt}"`}
            resultTitle="Generated SFX Cost Estimate"
        />
    );
}
