"use client";
import { TextGenerator } from "./TextGenerator";

export function LoyaltyTierUpgradePredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide customer data to predict loyalty tier upgrades."
            buttonText="Generate Loyalty Tier Upgrade"
            generatePrompt={(prompt) => `Predict loyalty tier upgrades: "${prompt}"`}
            resultTitle="Generated Loyalty Tier Upgrade"
        />
    );
}
