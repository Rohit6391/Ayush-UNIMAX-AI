"use client";
import { TextGenerator } from "./TextGenerator";

export function LootDropProbabilityBalancer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a game to balance its loot drop probabilities."
            buttonText="Generate Balanced Loot Drops"
            generatePrompt={(prompt) => `Balance loot drops: "${prompt}"`}
            resultTitle="Generated Balanced Loot Drops"
        />
    );
}
