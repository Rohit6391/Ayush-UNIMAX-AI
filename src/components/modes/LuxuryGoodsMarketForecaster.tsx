"use client";
import { TextGenerator } from "./TextGenerator";

export function LuxuryGoodsMarketForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide data to forecast the luxury goods market."
            buttonText="Generate Luxury Market Forecast"
            generatePrompt={(prompt) => `Forecast the luxury goods market: "${prompt}"`}
            resultTitle="Generated Luxury Market Forecast"
        />
    );
}
