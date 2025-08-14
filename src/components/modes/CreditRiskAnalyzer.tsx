
"use client";
import { TextGenerator } from "./TextGenerator";
import { analyzeCreditRisk } from "@/ai/flows/credit-risk-analyzer";

export function CreditRiskAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide financial data (credit history, income, debt, etc.) to analyze credit risk."
            buttonText="Analyze Credit Risk"
            generatePrompt={(prompt) => `Analyze the credit risk based on the following data: "${prompt}"`}
            resultTitle="Credit Risk Analysis"
            flow={(input) => analyzeCreditRisk({ data: input.prompt })}
        />
    );
}
