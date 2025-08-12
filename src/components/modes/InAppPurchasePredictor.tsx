"use client";
import { TextGenerator } from "./TextGenerator";

export function InAppPurchasePredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide user data to predict in-app purchases."
            buttonText="Generate In-App Purchase Prediction"
            generatePrompt={(prompt) => `Predict in-app purchases: "${prompt}"`}
            resultTitle="Generated In-App Purchase Prediction"
        />
    );
}
