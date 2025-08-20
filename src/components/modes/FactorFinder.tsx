"use client";
import { TextUtilities } from "./TextUtilities";

export function FactorFinder({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'Find factors of 48'"
            buttonText="Find Factors"
            generatePrompt={(prompt) => `List all the factors of the following number. Number: "${prompt}"`}
            resultTitle="Factors"
        />
    );
}
