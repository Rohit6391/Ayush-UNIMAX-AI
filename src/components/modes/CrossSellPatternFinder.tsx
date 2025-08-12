"use client";
import { TextGenerator } from "./TextGenerator";

export function CrossSellPatternFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide sales data to find cross-sell patterns."
            buttonText="Generate Cross-Sell Patterns"
            generatePrompt={(prompt) => `Find cross-sell patterns: "${prompt}"`}
            resultTitle="Generated Cross-Sell Patterns"
        />
    );
}
