"use client";
import { TextGenerator } from "./TextGenerator";

export function FantasyLoreGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'The history of an ancient elven kingdom' or 'The rules of a magical system based on elements.'"
            buttonText="Generate Lore"
            generatePrompt={(prompt) => 
                `You are a fantasy world-builder. Generate detailed lore for the following concept. Include history, culture, key figures, and important locations to make the world feel rich and alive. Concept: "${prompt}"`
            }
            resultTitle="Fantasy Lore"
        />
    );
}
