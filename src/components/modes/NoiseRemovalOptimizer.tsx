"use client";
import { TextGenerator } from "./TextGenerator";

export function NoiseRemovalOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload an audio file to remove noise."
            buttonText="Generate Noise-Free Audio"
            generatePrompt={(prompt) => `Remove audio noise: "${prompt}"`}
            resultTitle="Generated Noise-Free Audio"
        />
    );
}
