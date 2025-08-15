"use client";
import { TextGenerator } from "./TextGenerator";

export function PollutionAwarenessGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Ways to reduce plastic pollution.'"
            buttonText="Get Awareness Guide"
            generatePrompt={(prompt) => 
                `You are an environmental scientist. Create a short awareness guide on how individuals can help reduce a specific type of pollution. Include 3-5 actionable tips. Topic: "${prompt}"`
            }
            resultTitle="Pollution Awareness Guide"
        />
    );
}
