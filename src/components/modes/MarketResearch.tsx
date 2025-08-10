"use client";
import { TextGenerator } from "./TextGenerator";

export function MarketResearch({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Analyze the target audience for a new brand of eco-friendly sneakers' or 'What are the current trends in the coffee industry?'"
            buttonText="Get Market Research"
            generatePrompt={(prompt) => 
                `You are a market research analyst. Provide a detailed analysis of the following market research query. Include data points, trends, and strategic insights where possible. Query: "${prompt}"`
            }
            resultTitle="Market Research Report"
        />
    );
}
