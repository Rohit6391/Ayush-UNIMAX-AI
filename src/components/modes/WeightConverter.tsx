"use client";
import { TextGenerator } from "./TextGenerator";

export function WeightConverter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Convert 150 pounds to kilograms.'"
            buttonText="Convert Weight"
            generatePrompt={(prompt) => 
                `You are a unit converter. Perform the following weight conversion. Conversion: "${prompt}"`
            }
            resultTitle="Weight Conversion"
        />
    );
}
