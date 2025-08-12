"use client";
import { TextGenerator } from "./TextGenerator";

export function TeamDynamicsPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a team to predict its dynamics."
            buttonText="Generate Team Dynamics"
            generatePrompt={(prompt) => `Predict team dynamics: "${prompt}"`}
            resultTitle="Generated Team Dynamics"
        />
    );
}
