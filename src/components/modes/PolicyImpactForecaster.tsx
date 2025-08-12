"use client";
import { TextGenerator } from "./TextGenerator";

export function PolicyImpactForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a new policy to forecast its impact."
            buttonText="Generate Policy Impact Forecast"
            generatePrompt={(prompt) => `Forecast the impact of a policy: "${prompt}"`}
            resultTitle="Generated Policy Impact Forecast"
        />
    );
}
