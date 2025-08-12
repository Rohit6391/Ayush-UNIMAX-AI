"use client";
import { TextGenerator } from "./TextGenerator";

export function MultiplayerMatchmakingOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a game to optimize its matchmaking."
            buttonText="Generate Optimized Matchmaking"
            generatePrompt={(prompt) => `Optimize matchmaking: "${prompt}"`}
            resultTitle="Generated Optimized Matchmaking"
        />
    );
}
