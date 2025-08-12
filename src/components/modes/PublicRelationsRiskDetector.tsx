"use client";
import { TextGenerator } from "./TextGenerator";

export function PublicRelationsRiskDetector({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a situation to detect public relations risks."
            buttonText="Generate PR Risk"
            generatePrompt={(prompt) => `Detect PR risks: "${prompt}"`}
            resultTitle="Generated PR Risk"
        />
    );
}
