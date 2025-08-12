"use client";
import { TextGenerator } from "./TextGenerator";

export function MarketEntryRiskForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a market to forecast entry risks."
            buttonText="Generate Market Entry Risk"
            generatePrompt={(prompt) => `Forecast market entry risks: "${prompt}"`}
            resultTitle="Generated Market Entry Risk"
        />
    );
}
