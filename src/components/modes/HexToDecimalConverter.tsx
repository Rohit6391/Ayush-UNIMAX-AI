
"use client";
import { TextUtilities } from "./TextUtilities";

export function HexToDecimalConverter({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., '1A' or 'FF'"
            buttonText="Convert Hex to Decimal"
            generatePrompt={(prompt) => `Convert the following hexadecimal number to decimal. Show the conversion steps. Hex: "${prompt}"`}
            resultTitle="Hex to Decimal Conversion"
        />
    );
}
