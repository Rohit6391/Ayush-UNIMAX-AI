"use client";
import { TextUtilities } from "./TextUtilities";

export function BinaryToDecimalConverter({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., '1011'"
            buttonText="Convert Binary to Decimal"
            generatePrompt={(prompt) => `Convert the following binary number to decimal. Show the conversion steps. Binary: "${prompt}"`}
            resultTitle="Binary to Decimal Conversion"
        />
    );
}
