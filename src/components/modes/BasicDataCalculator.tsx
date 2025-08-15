
"use client";
import { TextUtilities } from "./TextUtilities";

export function BasicDataCalculator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'Sum of 15, 25, 35' or 'Product of 10, 20'"
            buttonText="Calculate Data"
            generatePrompt={(prompt) => `Perform the following basic data calculation and show the result. Calculation: "${prompt}"`}
            resultTitle="Data Calculation"
        />
    );
}
