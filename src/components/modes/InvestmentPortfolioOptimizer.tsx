
"use client";
import { TextGenerator } from "./TextGenerator";
import { investmentPortfolioOptimizerFlow } from "@/ai/flows/investment-portfolio-optimizer";

export function InvestmentPortfolioOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your current investment portfolio, risk tolerance, and financial goals."
            buttonText="Optimize Portfolio"
            generatePrompt={(prompt) => `Optimize the following investment portfolio: "${prompt}"`}
            resultTitle="Optimized Portfolio Recommendations"
            flow={investmentPortfolioOptimizerFlow}
        />
    );
}
