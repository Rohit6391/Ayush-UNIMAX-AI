"use client";
import { TextGenerator } from "./TextGenerator";

export function PatentPortfolioAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide patent data to analyze the portfolio."
            buttonText="Generate Patent Portfolio"
            generatePrompt={(prompt) => `Analyze a patent portfolio: "${prompt}"`}
            resultTitle="Generated Patent Portfolio"
        />
    );
}
