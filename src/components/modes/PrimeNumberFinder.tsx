
"use client";
import { TextUtilities } from "./TextUtilities";

export function PrimeNumberFinder({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'Find all prime numbers up to 50'"
            buttonText="Find Prime Numbers"
            generatePrompt={(prompt) => `Find all the prime numbers in the following range. Range: "${prompt}"`}
            resultTitle="Prime Numbers"
        />
    );
}
