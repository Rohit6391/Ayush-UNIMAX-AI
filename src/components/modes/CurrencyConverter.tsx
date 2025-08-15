"use client";
import { TextGenerator } from "./TextGenerator";

export function CurrencyConverter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Convert 100 USD to EUR.'"
            buttonText="Convert Currency"
            generatePrompt={(prompt) => 
                `You are a currency converter. Using up-to-date exchange rates, convert the following currency. State the exchange rate you used. Conversion: "${prompt}"`
            }
            resultTitle="Currency Conversion"
        />
    );
}
