"use client";
import { TextUtilities } from "./TextUtilities";

export function RatioCalculator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'Ratio of 3 apples to 5 oranges'"
            buttonText="Calculate Ratio"
            generatePrompt={(prompt) => `Calculate the ratio for the following items. Express it in its simplest form. Items: "${prompt}"`}
            resultTitle="Ratio Calculation"
        />
    );
}
