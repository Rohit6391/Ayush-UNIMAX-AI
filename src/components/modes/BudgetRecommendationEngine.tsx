"use client";
import { TextGenerator } from "./TextGenerator";

export function BudgetRecommendationEngine({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide your income, expenses, and financial goals to get a budget recommendation."
            buttonText="Generate Budget Recommendation"
            generatePrompt={(prompt) => `Recommend a budget: "${prompt}"`}
            resultTitle="Generated Budget Recommendation"
        />
    );
}
