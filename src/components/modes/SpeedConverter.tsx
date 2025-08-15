"use client";
import { TextGenerator } from "./TextGenerator";

export function SpeedConverter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Convert 60 mph to km/h.'"
            buttonText="Convert Speed"
            generatePrompt={(prompt) => 
                `You are a unit converter. Perform the following speed conversion. Conversion: "${prompt}"`
            }
            resultTitle="Speed Conversion"
        />
    );
}
