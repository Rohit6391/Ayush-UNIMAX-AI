
"use client";
import { TextGenerator } from "./TextGenerator";

export function CryptocurrencyUpdateWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'The current price of Bitcoin and its 24-hour change.'"
            buttonText="Write Update"
            generatePrompt={(prompt) => 
                `You are a crypto analyst. Provide a brief update on the following cryptocurrency. Cryptocurrency: "${prompt}"`
            }
            resultTitle="Cryptocurrency Update"
        />
    );
}
