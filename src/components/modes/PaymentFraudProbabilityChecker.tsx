"use client";
import { TextGenerator } from "./TextGenerator";

export function PaymentFraudProbabilityChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide transaction data to check for fraud probability."
            buttonText="Generate Fraud Check"
            generatePrompt={(prompt) => `Check payment fraud probability: "${prompt}"`}
            resultTitle="Generated Fraud Check"
        />
    );
}
