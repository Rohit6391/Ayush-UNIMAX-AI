"use client";
import { TextGenerator } from "./TextGenerator";

export function LengthConverter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Convert 5 feet 10 inches to centimeters.'"
            buttonText="Convert Length"
            generatePrompt={(prompt) => 
                `You are a unit converter. Perform the following length conversion. Conversion: "${prompt}"`
            }
            resultTitle="Length Conversion"
        />
    );
}
