"use client";
import { TextGenerator } from "./TextGenerator";

export function MixingMasteringAdvisor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a track to get mixing and mastering advice."
            buttonText="Generate Mixing/Mastering Advice"
            generatePrompt={(prompt) => `Get mixing and mastering advice: "${prompt}"`}
            resultTitle="Generated Mixing/Mastering Advice"
        />
    );
}
