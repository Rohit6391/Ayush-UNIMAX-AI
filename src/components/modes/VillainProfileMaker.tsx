"use client";
import { TextGenerator } from "./TextGenerator";

export function VillainProfileMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'An eco-terrorist who can control the weather.'"
            buttonText="Make Villain Profile"
            generatePrompt={(prompt) => 
                `You are a character designer. Create a profile for a compelling villain, including their name, powers, motivations, and a key weakness. Prompt: "${prompt}"`
            }
            resultTitle="Villain Profile"
        />
    );
}
