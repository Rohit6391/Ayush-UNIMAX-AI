"use client";
import { TextGenerator } from "./TextGenerator";

export function RenewableEnergyFacts({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Interesting facts about solar power.'"
            buttonText="Get Energy Facts"
            generatePrompt={(prompt) => 
                `You are a renewable energy expert. Provide 5 interesting and verifiable facts about the following type of renewable energy. Type: "${prompt}"`
            }
            resultTitle="Renewable Energy Facts"
        />
    );
}
