"use client";
import { TextGenerator } from "./TextGenerator";

export function SubscriptionRenewalPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide customer data to predict subscription renewals."
            buttonText="Generate Subscription Renewal"
            generatePrompt={(prompt) => `Predict subscription renewals: "${prompt}"`}
            resultTitle="Generated Subscription Renewal"
        />
    );
}
