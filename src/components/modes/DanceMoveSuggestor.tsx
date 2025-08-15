"use client";
import { TextGenerator } from "./TextGenerator";

export function DanceMoveSuggestor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Simple dance moves for a wedding' or '80s pop dance moves'"
            buttonText="Suggest Moves"
            generatePrompt={(prompt) => 
                `You are a dance instructor. Suggest and describe three simple dance moves suitable for the following music genre or occasion. Genre/Occasion: "${prompt}"`
            }
            resultTitle="Dance Move Suggestions"
        />
    );
}
