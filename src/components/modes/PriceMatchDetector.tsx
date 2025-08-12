"use client";
import { TextGenerator } from "./TextGenerator";

export function PriceMatchDetector({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a product to detect price matching opportunities."
            buttonText="Generate Price Match Detection"
            generatePrompt={(prompt) => `Detect price matches: "${prompt}"`}
            resultTitle="Generated Price Match Detection"
        />
    );
}
