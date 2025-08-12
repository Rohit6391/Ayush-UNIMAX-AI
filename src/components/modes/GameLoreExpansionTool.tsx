"use client";
import { TextGenerator } from "./TextGenerator";

export function GameLoreExpansionTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a game world to expand its lore."
            buttonText="Generate Expanded Lore"
            generatePrompt={(prompt) => `Expand game lore: "${prompt}"`}
            resultTitle="Generated Expanded Lore"
        />
    );
}
