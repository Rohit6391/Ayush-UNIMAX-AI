"use client";
import { TextGenerator } from "./TextGenerator";

export function EcommerceUpsellStrategyPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your products to plan an upsell strategy."
            buttonText="Generate Upsell Strategy"
            generatePrompt={(prompt) => `Plan an e-commerce upsell strategy: "${prompt}"`}
            resultTitle="Generated Upsell Strategy"
        />
    );
}
