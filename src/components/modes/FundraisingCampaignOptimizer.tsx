"use client";
import { TextGenerator } from "./TextGenerator";

export function FundraisingCampaignOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your fundraising campaign to get optimization suggestions."
            buttonText="Generate Optimized Campaign"
            generatePrompt={(prompt) => `Optimize a fundraising campaign: "${prompt}"`}
            resultTitle="Generated Optimized Campaign"
        />
    );
}
