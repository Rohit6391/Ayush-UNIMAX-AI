"use client";
import { TextGenerator } from "./TextGenerator";

export function MaintenanceCostEstimator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a maintenance task to estimate its cost."
            buttonText="Generate Maintenance Cost Estimate"
            generatePrompt={(prompt) => `Estimate maintenance cost: "${prompt}"`}
            resultTitle="Generated Maintenance Cost Estimate"
        />
    );
}
