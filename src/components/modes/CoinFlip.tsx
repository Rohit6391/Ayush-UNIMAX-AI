"use client";
import { TextGenerator } from "./TextGenerator";

export function CoinFlip({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Flip a coin.'"
            buttonText="Flip Coin"
            generatePrompt={(prompt) => 
                `You are a coin flip simulator. Simulate a coin flip and provide the result (Heads or Tails).`
            }
            resultTitle="Coin Flip Result"
        />
    );
}
