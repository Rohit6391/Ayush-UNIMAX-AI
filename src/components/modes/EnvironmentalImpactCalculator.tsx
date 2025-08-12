"use client";
import { TextGenerator } from "./TextGenerator";

export function EnvironmentalImpactCalculator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe an activity to calculate its environmental impact."
            buttonText="Generate Environmental Impact Report"
            generatePrompt={(prompt) => `Calculate environmental impact: "${prompt}"`}
            resultTitle="Generated Environmental Impact Report"
        />
    );
}
