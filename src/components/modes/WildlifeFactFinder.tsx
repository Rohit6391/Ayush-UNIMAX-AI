"use client";
import { TextGenerator } from "./TextGenerator";

export function WildlifeFactFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Interesting facts about the red panda'"
            buttonText="Find Wildlife Facts"
            generatePrompt={(prompt) => 
                `You are a wildlife biologist. Provide 5 interesting and verifiable facts about the following animal: "${prompt}"`
            }
            resultTitle="Wildlife Facts"
        />
    );
}
