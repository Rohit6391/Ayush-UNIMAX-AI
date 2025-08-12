"use client";
import { TextGenerator } from "./TextGenerator";

export function SoundQualityEnhancer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload an audio file to enhance its quality."
            buttonText="Generate Enhanced Audio"
            generatePrompt={(prompt) => `Enhance audio quality: "${prompt}"`}
            resultTitle="Generated Enhanced Audio"
        />
    );
}
