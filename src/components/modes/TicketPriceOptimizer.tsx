"use client";
import { TextGenerator } from "./TextGenerator";

export function TicketPriceOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide event data to optimize ticket prices."
            buttonText="Generate Optimized Ticket Prices"
            generatePrompt={(prompt) => `Optimize ticket prices: "${prompt}"`}
            resultTitle="Generated Optimized Ticket Prices"
        />
    );
}
