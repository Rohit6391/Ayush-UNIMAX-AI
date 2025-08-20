"use client";
import { TextUtilities } from "./TextUtilities";

export function DecimalToFractionConverter({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., '0.75'"
            buttonText="Convert Decimal to Fraction"
            generatePrompt={(prompt) => `Convert the following decimal number to a fraction. Show the conversion steps. Decimal: "${prompt}"`}
            resultTitle="Decimal to Fraction Conversion"
        />
    );
}
