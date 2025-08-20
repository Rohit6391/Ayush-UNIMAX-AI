"use client";
import { TextGenerator } from "./TextGenerator";

export function KitchenMeasurementConverter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Convert 1 cup of flour to grams' or 'How many tablespoons in 1/4 cup?'"
            buttonText="Convert Measurement"
            generatePrompt={(p: string) => 
                `You are a kitchen measurement converter. Provide a clear conversion for the following request. Include common equivalents where helpful. Request: "${p}"`
            }
            resultTitle="Kitchen Measurement Conversion"
        />
    );
}
