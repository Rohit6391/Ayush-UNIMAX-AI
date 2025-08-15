
"use client";
import { TextGenerator } from "./TextGenerator";

export function HealthTipGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Tips for staying hydrated.'"
            buttonText="Get Health Tip"
            generatePrompt={(prompt) => 
                `You are a health and wellness coach. Provide a short, actionable health tip on the following topic. Topic: "${prompt}"`
            }
            resultTitle="Health Tip"
        />
    );
}
