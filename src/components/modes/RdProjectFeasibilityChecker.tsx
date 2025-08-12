"use client";
import { TextGenerator } from "./TextGenerator";

export function RdProjectFeasibilityChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe an R&D project to check its feasibility."
            buttonText="Generate R&D Feasibility"
            generatePrompt={(prompt) => `Check R&D project feasibility: "${prompt}"`}
            resultTitle="Generated R&D Feasibility"
        />
    );
}
