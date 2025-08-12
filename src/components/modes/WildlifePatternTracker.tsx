"use client";
import { TextGenerator } from "./TextGenerator";

export function WildlifePatternTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide data to track wildlife patterns."
            buttonText="Generate Wildlife Pattern Analysis"
            generatePrompt={(prompt) => `Track wildlife patterns: "${prompt}"`}
            resultTitle="Generated Wildlife Pattern Analysis"
        />
    );
}
