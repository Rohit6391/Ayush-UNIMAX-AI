"use client";
import { TextGenerator } from "./TextGenerator";

export function ShotSequencePlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a scene to plan the shot sequence."
            buttonText="Generate Shot Sequence"
            generatePrompt={(prompt) => `Plan a shot sequence: "${prompt}"`}
            resultTitle="Generated Shot Sequence"
        />
    );
}
