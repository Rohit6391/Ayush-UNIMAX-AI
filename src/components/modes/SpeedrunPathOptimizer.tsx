"use client";
import { TextGenerator } from "./TextGenerator";

export function SpeedrunPathOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a game to optimize its speedrun path."
            buttonText="Generate Optimized Speedrun Path"
            generatePrompt={(prompt) => `Optimize a speedrun path: "${prompt}"`}
            resultTitle="Generated Optimized Speedrun Path"
        />
    );
}
