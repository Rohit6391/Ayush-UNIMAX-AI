"use client";
import { TextUtilities } from "./TextUtilities";

export function LogarithmCalculator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'log base 10 of 1000'"
            buttonText="Calculate Logarithm"
            generatePrompt={(prompt) => `Calculate the result of the following logarithm. Expression: "${prompt}"`}
            resultTitle="Logarithm Calculation"
        />
    );
}
