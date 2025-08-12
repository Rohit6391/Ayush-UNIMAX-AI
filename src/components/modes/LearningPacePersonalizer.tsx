"use client";
import { TextGenerator } from "./TextGenerator";

export function LearningPacePersonalizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide student data to personalize their learning pace."
            buttonText="Generate Personalized Learning Pace"
            generatePrompt={(prompt) => `Personalize a learning pace: "${prompt}"`}
            resultTitle="Generated Personalized Learning Pace"
        />
    );
}
