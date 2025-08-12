"use client";
import { TextGenerator } from "./TextGenerator";

export function HabitatRestorationPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe an area to plan habitat restoration."
            buttonText="Generate Habitat Restoration Plan"
            generatePrompt={(prompt) => `Plan habitat restoration: "${prompt}"`}
            resultTitle="Generated Habitat Restoration Plan"
        />
    );
}
