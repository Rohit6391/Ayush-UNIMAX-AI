"use client";
import { TextGenerator } from "./TextGenerator";

export function LeadScoringAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide lead data to score their conversion likelihood."
            buttonText="Generate Lead Score"
            generatePrompt={(prompt) => `Score leads: "${prompt}"`}
            resultTitle="Generated Lead Score"
        />
    );
}
