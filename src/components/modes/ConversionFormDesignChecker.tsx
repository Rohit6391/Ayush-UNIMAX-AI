"use client";
import { TextGenerator } from "./TextGenerator";

export function ConversionFormDesignChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a conversion form to check its design."
            buttonText="Generate Form Design Check"
            generatePrompt={(prompt) => `Check a conversion form design: "${prompt}"`}
            resultTitle="Generated Form Design Check"
        />
    );
}
