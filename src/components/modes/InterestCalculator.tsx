"use client";
import { TextGenerator } from "./TextGenerator";

export function InterestCalculator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Calculate compound interest on $1000 at 7% annually for 5 years.'"
            buttonText="Calculate Interest"
            generatePrompt={(prompt) => 
                `You are a financial calculator. Compute the interest based on the following details and show the formula used. Details: "${prompt}"`
            }
            resultTitle="Interest Calculation"
        />
    );
}
