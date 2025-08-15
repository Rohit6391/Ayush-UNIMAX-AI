"use client";
import { TextGenerator } from "./TextGenerator";

export function UnitConverter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Convert 10 miles to kilometers.'"
            buttonText="Convert Units"
            generatePrompt={(prompt) => 
                `You are a unit converter. Perform the following conversion. Conversion: "${prompt}"`
            }
            resultTitle="Unit Conversion"
        />
    );
}
