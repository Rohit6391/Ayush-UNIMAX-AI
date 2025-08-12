"use client";
import { TextGenerator } from "./TextGenerator";

export function AgriculturalMarketPriceForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide market data to forecast agricultural prices."
            buttonText="Generate Market Price Forecast"
            generatePrompt={(prompt) => `Forecast agricultural market prices: "${prompt}"`}
            resultTitle="Generated Market Price Forecast"
        />
    );
}
