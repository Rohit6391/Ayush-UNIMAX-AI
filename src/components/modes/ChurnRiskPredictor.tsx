"use client";
import { TextGenerator } from "./TextGenerator";

export function ChurnRiskPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a customer profile and their usage patterns. e.g., 'A user who hasn't logged in for 30 days and has a pending support ticket.'"
            buttonText="Predict Churn Risk"
            generatePrompt={(prompt) => 
                `You are a customer success analyst. Based on the following customer profile, assess their churn risk (Low, Medium, High). Justify your assessment and suggest one proactive retention strategy. Profile: "${prompt}"`
            }
            resultTitle="Churn Risk Prediction"
        />
    );
}
