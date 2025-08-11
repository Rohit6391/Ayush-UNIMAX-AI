"use client";
import { TextGenerator } from "./TextGenerator";

export function VillainBackstoryCreator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your villain's powers and main goal. e.g., 'A powerful sorcerer who wants to plunge the world into eternal darkness.'"
            buttonText="Create Backstory"
            generatePrompt={(prompt) => 
                `You are a character development expert. Create a compelling and tragic backstory for the following villain that explains their motivations and makes them a more sympathetic, three-dimensional character. Villain: "${prompt}"`
            }
            resultTitle="Villain Backstory"
        />
    );
}
