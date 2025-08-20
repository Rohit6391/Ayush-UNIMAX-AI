"use client";
import { TextUtilities } from "./TextUtilities";

export function AverageCalculator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., '10, 20, 30, 40, 50'"
            buttonText="Calculate Average"
            generatePrompt={(prompt) => `Calculate the average of the following numbers. Show the steps. Numbers: "${prompt}"`}
            resultTitle="Average Calculation"
        />
    );
}
