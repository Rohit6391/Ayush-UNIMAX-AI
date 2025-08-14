
"use client";
import { TextGenerator } from "./TextGenerator";
import { transactionPatternFinderFlow } from "@/ai/flows/transaction-pattern-finder";

export function TransactionPatternFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste your transaction data (CSV, JSON, etc.) to find patterns."
            buttonText="Find Patterns"
            generatePrompt={(prompt) => `Analyze the following transaction data for patterns: "${prompt}"`}
            resultTitle="Transaction Pattern Analysis"
            flow={transactionPatternFinderFlow}
        />
    );
}
