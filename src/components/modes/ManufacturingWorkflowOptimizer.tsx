"use client";
import { TextGenerator } from "./TextGenerator";

export function ManufacturingWorkflowOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a manufacturing process to optimize the workflow."
            buttonText="Generate Optimized Workflow"
            generatePrompt={(prompt) => `Optimize a manufacturing workflow: "${prompt}"`}
            resultTitle="Generated Optimized Workflow"
        />
    );
}
