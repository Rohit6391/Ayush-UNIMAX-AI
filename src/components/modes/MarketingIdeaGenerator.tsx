"use client";
import { TextGenerator } from "./TextGenerator";

export function MarketingIdeaGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Marketing ideas for a local coffee shop'"
            buttonText="Generate Ideas"
            generatePrompt={(prompt) => 
                `You are a marketing strategist. Suggest three creative and effective marketing ideas for the following business or product. Business/Product: "${prompt}"`
            }
            resultTitle="Marketing Ideas"
        />
    );
}
