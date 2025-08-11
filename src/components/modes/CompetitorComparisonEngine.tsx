"use client";
import { TextGenerator } from "./TextGenerator";

export function CompetitorComparisonEngine({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="List two or more competitors to compare. e.g., 'Compare Netflix and Disney+'"
            buttonText="Compare Competitors"
            generatePrompt={(prompt) => 
                `You are a market intelligence analyst. Provide a detailed comparison of the following competitors. Analyze their strengths, weaknesses, opportunities, and threats (SWOT analysis) and summarize their market positioning. Competitors: "${prompt}"`
            }
            resultTitle="Competitor Comparison"
        />
    );
}
