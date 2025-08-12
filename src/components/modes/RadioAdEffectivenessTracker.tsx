"use client";
import { TextGenerator } from "./TextGenerator";

export function RadioAdEffectivenessTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide ad data to track its effectiveness."
            buttonText="Generate Ad Effectiveness"
            generatePrompt={(prompt) => `Track radio ad effectiveness: "${prompt}"`}
            resultTitle="Generated Ad Effectiveness"
        />
    );
}
