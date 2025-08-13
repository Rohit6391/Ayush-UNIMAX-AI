"use client";
import { TextGenerator } from "./TextGenerator";

export function AIVirtualPetCreator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A fire-breathing cat' or 'A fluffy robot companion'"
            buttonText="Create Virtual Pet"
            generatePrompt={(prompt) => 
                `You are a game designer. Create a detailed profile for a virtual pet based on the following idea. Include its appearance, personality, special abilities, and care needs. Idea: "${prompt}"`
            }
            resultTitle="Virtual Pet Profile"
        />
    );
}
