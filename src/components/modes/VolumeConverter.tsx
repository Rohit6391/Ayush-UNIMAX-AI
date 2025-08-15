"use client";
import { TextGenerator } from "./TextGenerator";

export function VolumeConverter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Convert 2 liters to gallons.'"
            buttonText="Convert Volume"
            generatePrompt={(prompt) => 
                `You are a unit converter. Perform the following volume conversion. Conversion: "${prompt}"`
            }
            resultTitle="Volume Conversion"
        />
    );
}
