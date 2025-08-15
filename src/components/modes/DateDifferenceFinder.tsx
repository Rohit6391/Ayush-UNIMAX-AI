"use client";
import { TextGenerator } from "./TextGenerator";

export function DateDifferenceFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How many days between January 1, 2023 and December 31, 2023?'"
            buttonText="Calculate Difference"
            generatePrompt={(prompt) => 
                `You are a date calculator. Find the difference in days between the two dates provided. Dates: "${prompt}"`
            }
            resultTitle="Date Difference"
        />
    );
}
