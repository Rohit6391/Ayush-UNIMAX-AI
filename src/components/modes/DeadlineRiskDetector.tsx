"use client";
import { TextGenerator } from "./TextGenerator";

export function DeadlineRiskDetector({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a project to detect deadline risks."
            buttonText="Generate Deadline Risk"
            generatePrompt={(prompt) => `Detect deadline risks: "${prompt}"`}
            resultTitle="Generated Deadline Risk"
        />
    );
}
