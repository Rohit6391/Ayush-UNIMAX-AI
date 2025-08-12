"use client";
import { TextGenerator } from "./TextGenerator";

export function PlayerMotivationAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a game to analyze player motivations."
            buttonText="Generate Player Motivation"
            generatePrompt={(prompt) => `Analyze player motivations: "${prompt}"`}
            resultTitle="Generated Player Motivation"
        />
    );
}
