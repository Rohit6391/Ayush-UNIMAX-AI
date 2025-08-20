"use client";
import { TextGenerator } from "./TextGenerator";

export function StockPriceUpdateWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'The latest stock price for AAPL.'"
            buttonText="Write Update"
            generatePrompt={(p: string) => 
                `You are a financial analyst. Provide a brief update on the following stock, including its current price and recent trend. Stock: "${p}"`
            }
            resultTitle="Stock Price Update"
        />
    );
}
