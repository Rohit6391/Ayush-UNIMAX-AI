"use client";
import { TextGenerator } from "./TextGenerator";

export function AgeCalculator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Date of birth: October 26, 1985'"
            buttonText="Calculate Age"
            generatePrompt={(prompt) => 
                `You are a calculator. Calculate the current age based on the following date of birth. DOB: "${prompt}"`
            }
            resultTitle="Age Calculation"
        />
    );
}
