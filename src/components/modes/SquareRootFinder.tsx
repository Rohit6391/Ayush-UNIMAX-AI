"use client";
import { TextUtilities } from "./TextUtilities";

export function SquareRootFinder({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'Square root of 144'"
            buttonText="Find Square Root"
            generatePrompt={(prompt) => `Calculate the square root of the following number. Number: "${prompt}"`}
            resultTitle="Square Root"
        />
    );
}
