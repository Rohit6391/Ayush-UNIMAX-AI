"use client";
import { TextGenerator } from "./TextGenerator";

export function SymptomToSpecialistRecommender({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="List symptoms to get a specialist recommendation."
            buttonText="Generate Specialist Recommendation"
            generatePrompt={(prompt) => `Recommend a specialist: "${prompt}"`}
            resultTitle="Generated Specialist Recommendation"
        />
    );
}
