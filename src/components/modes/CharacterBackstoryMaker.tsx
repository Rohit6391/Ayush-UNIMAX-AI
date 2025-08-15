
"use client";
import { TextGenerator } from "./TextGenerator";

export function CharacterBackstoryMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A rogue who grew up on the streets' or 'An old wizard who has seen too much war'"
            buttonText="Create Backstory"
            generatePrompt={(prompt) => 
                `You are a creative writer. Create a compelling backstory for a fictional character with the following description. Include their childhood, a defining moment, and their primary motivation. Description: "${prompt}"`
            }
            resultTitle="Character Backstory"
        />
    );
}

    