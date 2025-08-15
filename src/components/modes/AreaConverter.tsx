"use client";
import { TextGenerator } from "./TextGenerator";

export function AreaConverter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Convert 2 square meters to square feet.'"
            buttonText="Convert Area"
            generatePrompt={(prompt) => 
                `You are a unit converter. Perform the following area conversion. Conversion: "${prompt}"`
            }
            resultTitle="Area Conversion"
        />
    );
}
