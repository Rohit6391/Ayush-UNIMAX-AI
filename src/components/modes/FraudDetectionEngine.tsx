"use client";
import { TextGenerator } from "./TextGenerator";

export function FraudDetectionEngine({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a set of transactions to check for fraud."
            buttonText="Generate Fraud Analysis"
            generatePrompt={(prompt) => `Analyze transactions for fraud: "${prompt}"`}
            resultTitle="Generated Fraud Analysis"
        />
    );
}
