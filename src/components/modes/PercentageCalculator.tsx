"use client";
import { TextUtilities } from "./TextUtilities";

export function PercentageCalculator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'What is 20% of 150?'"
            buttonText="Calculate Percentage"
            generatePrompt={(prompt) => `Calculate the following percentage. Show the steps. Calculation: "${prompt}"`}
            resultTitle="Percentage Calculation"
        />
    );
}
