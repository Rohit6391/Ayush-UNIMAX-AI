"use client";
import { TextGenerator } from "./TextGenerator";

export function GameStrategySimulator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a game to simulate strategies."
            buttonText="Generate Game Strategy Simulation"
            generatePrompt={(prompt) => `Simulate a game strategy: "${prompt}"`}
            resultTitle="Generated Game Strategy Simulation"
        />
    );
}
