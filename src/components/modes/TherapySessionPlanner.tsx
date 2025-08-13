"use client";
import { TextGenerator } from "./TextGenerator";

export function TherapySessionPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your goals to plan a therapy session."
            buttonText="Generate Therapy Session Plan"
            generatePrompt={(prompt) => `Plan a therapy session: "${prompt}"`}
            resultTitle="Generated Therapy Session Plan"
        />
    );
}
