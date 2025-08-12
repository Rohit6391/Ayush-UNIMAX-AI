"use client";
import { TextGenerator } from "./TextGenerator";

export function ChordProgressionGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a mood to generate a chord progression."
            buttonText="Generate Chord Progression"
            generatePrompt={(prompt) => `Generate a chord progression: "${prompt}"`}
            resultTitle="Generated Chord Progression"
        />
    );
}
