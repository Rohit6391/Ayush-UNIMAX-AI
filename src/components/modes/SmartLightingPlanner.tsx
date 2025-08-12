"use client";
import { TextGenerator } from "./TextGenerator";

export function SmartLightingPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a space to plan a smart lighting system."
            buttonText="Generate Smart Lighting Plan"
            generatePrompt={(prompt) => `Plan a smart lighting system: "${prompt}"`}
            resultTitle="Generated Smart Lighting Plan"
        />
    );
}
