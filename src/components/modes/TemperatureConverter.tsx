"use client";
import { TextGenerator } from "./TextGenerator";

export function TemperatureConverter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Convert 30 degrees Celsius to Fahrenheit.'"
            buttonText="Convert Temperature"
            generatePrompt={(prompt) => 
                `You are a unit converter. Perform the following temperature conversion. Conversion: "${prompt}"`
            }
            resultTitle="Temperature Conversion"
        />
    );
}
