"use client";
import { TextGenerator } from "./TextGenerator";

export function EsportsStrategyAdvisor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a game to get esports strategy advice."
            buttonText="Generate Esports Strategy"
            generatePrompt={(prompt) => `Get esports strategy advice: "${prompt}"`}
            resultTitle="Generated Esports Strategy"
        />
    );
}
