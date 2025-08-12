"use client";
import { TextGenerator } from "./TextGenerator";

export function PageLoadImpactPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a URL to predict its page load impact."
            buttonText="Generate Page Load Impact"
            generatePrompt={(prompt) => `Predict page load impact: "${prompt}"`}
            resultTitle="Generated Page Load Impact"
        />
    );
}
