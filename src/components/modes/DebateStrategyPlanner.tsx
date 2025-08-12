"use client";
import { TextGenerator } from "./TextGenerator";

export function DebateStrategyPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a debate topic to plan your strategy."
            buttonText="Generate Debate Strategy"
            generatePrompt={(prompt) => `Plan a debate strategy: "${prompt}"`}
            resultTitle="Generated Debate Strategy"
        />
    );
}
