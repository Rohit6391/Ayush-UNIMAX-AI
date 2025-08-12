"use client";
import { TextGenerator } from "./TextGenerator";

export function WorkerSafetyRiskDetector({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a work environment to detect safety risks."
            buttonText="Generate Safety Risk Analysis"
            generatePrompt={(prompt) => `Detect worker safety risks: "${prompt}"`}
            resultTitle="Generated Safety Risk Analysis"
        />
    );
}
