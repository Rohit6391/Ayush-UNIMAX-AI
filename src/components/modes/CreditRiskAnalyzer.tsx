"use client";
import { TextGenerator } from "./TextGenerator";

export function CreditRiskAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide financial data to analyze credit risk."
            buttonText="Generate Credit Risk Analysis"
            generatePrompt={(prompt) => `Analyze credit risk: "${prompt}"`}
            resultTitle="Generated Credit Risk Analysis"
        />
    );
}
