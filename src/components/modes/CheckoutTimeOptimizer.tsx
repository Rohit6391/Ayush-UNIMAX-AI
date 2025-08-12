"use client";
import { TextGenerator } from "./TextGenerator";

export function CheckoutTimeOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your checkout process to optimize it."
            buttonText="Generate Optimized Checkout"
            generatePrompt={(prompt) => `Optimize checkout time: "${prompt}"`}
            resultTitle="Generated Optimized Checkout"
        />
    );
}
