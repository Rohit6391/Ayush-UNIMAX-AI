"use client";
import { TextGenerator } from "./TextGenerator";

export function UnitConversionPracticeTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Practice problems for converting inches to centimeters'"
            buttonText="Create Practice"
            generatePrompt={(prompt) => 
                `You are a math tutor. Create 5 practice problems for unit conversion based on the following request. Include an answer key. Request: "${prompt}"`
            }
            resultTitle="Unit Conversion Practice"
        />
    );
}
