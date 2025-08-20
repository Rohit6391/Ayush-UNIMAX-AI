"use client";
import { TextUtilities } from "./TextUtilities";

export function ProbabilityCalculator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'Probability of rolling a 6 on a single die'"
            buttonText="Calculate Probability"
            generatePrompt={(prompt) => `Calculate the probability of the following event. Show the formula and result. Event: "${prompt}"`}
            resultTitle="Probability Calculation"
        />
    );
}
