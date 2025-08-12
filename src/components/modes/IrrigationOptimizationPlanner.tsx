"use client";
import { TextGenerator } from "./TextGenerator";

export function IrrigationOptimizationPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide farm data to plan optimized irrigation."
            buttonText="Generate Irrigation Plan"
            generatePrompt={(prompt) => `Plan irrigation optimization: "${prompt}"`}
            resultTitle="Generated Irrigation Plan"
        />
    );
}
