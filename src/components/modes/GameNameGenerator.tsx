"use client";
import { TextGenerator } from "./TextGenerator";

export function GameNameGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A fantasy role-playing game about dragons'"
            buttonText="Generate Game Names"
            generatePrompt={(prompt) => 
                `You are a creative game designer. Suggest 10 unique and cool-sounding names for a video game with the following description: "${prompt}"`
            }
            resultTitle="Game Name Ideas"
        />
    );
}
