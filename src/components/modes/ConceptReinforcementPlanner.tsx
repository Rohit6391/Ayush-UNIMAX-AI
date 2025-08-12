"use client";
import { TextGenerator } from "./TextGenerator";

export function ConceptReinforcementPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a concept to plan reinforcement activities."
            buttonText="Generate Reinforcement Plan"
            generatePrompt={(prompt) => `Plan concept reinforcement: "${prompt}"`}
            resultTitle="Generated Reinforcement Plan"
        />
    );
}
