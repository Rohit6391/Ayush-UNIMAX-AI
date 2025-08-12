"use client";
import { TextGenerator } from "./TextGenerator";

export function SupplyChainAiPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your supply chain goals to get an optimized plan."
            buttonText="Generate Supply Chain Plan"
            generatePrompt={(prompt) => `Create a supply chain plan: "${prompt}"`}
            resultTitle="Generated Supply Chain Plan"
        />
    );
}
