"use client";
import { TextUtilities } from "./TextUtilities";

export function ExponentCalculator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., '5^3' or '2 to the power of 10'"
            buttonText="Calculate Exponent"
            generatePrompt={(prompt) => `Calculate the result of the following exponentiation. Show the calculation. Expression: "${prompt}"`}
            resultTitle="Exponent Calculation"
        />
    );
}
