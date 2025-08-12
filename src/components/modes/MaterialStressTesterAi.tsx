"use client";
import { TextGenerator } from "./TextGenerator";

export function MaterialStressTesterAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a material to simulate a stress test."
            buttonText="Generate Material Stress Test"
            generatePrompt={(prompt) => `Test material stress: "${prompt}"`}
            resultTitle="Generated Material Stress Test"
        />
    );
}
