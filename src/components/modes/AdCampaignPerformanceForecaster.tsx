"use client";
import { TextGenerator } from "./TextGenerator";

export function AdCampaignPerformanceForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe an ad campaign to forecast its performance."
            buttonText="Generate Ad Campaign Forecast"
            generatePrompt={(prompt) => `Forecast an ad campaign: "${prompt}"`}
            resultTitle="Generated Ad Campaign Forecast"
        />
    );
}
