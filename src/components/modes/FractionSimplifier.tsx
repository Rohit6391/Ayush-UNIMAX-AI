
"use client";
import { TextUtilities } from "./TextUtilities";

export function FractionSimplifier({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., '12/16'"
            buttonText="Simplify Fraction"
            generatePrompt={(prompt) => `Simplify the following fraction to its lowest terms. Show the steps. Fraction: "${prompt}"`}
            resultTitle="Simplified Fraction"
        />
    );
}
