"use client";
import { TextGenerator } from "./TextGenerator";

export function InvestmentPortfolioOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="List your current investments and goals to get an optimized portfolio."
            buttonText="Generate Optimized Portfolio"
            generatePrompt={(prompt) => `Optimize an investment portfolio: "${prompt}"`}
            resultTitle="Generated Optimized Portfolio"
        />
    );
}
