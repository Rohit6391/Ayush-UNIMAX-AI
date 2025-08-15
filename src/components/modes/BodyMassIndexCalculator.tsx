"use client";
import { TextGenerator } from "./TextGenerator";

export function BodyMassIndexCalculator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Height: 5 feet 9 inches, Weight: 160 lbs'"
            buttonText="Calculate BMI"
            generatePrompt={(prompt) => 
                `You are a health calculator. Calculate the Body Mass Index (BMI) based on the provided height and weight. Also, state the standard BMI categories (e.g., Underweight, Normal weight). IMPORTANT: Include a disclaimer that this is a general calculation and not a substitute for professional medical advice. Details: "${prompt}"`
            }
            resultTitle="BMI Calculation"
        />
    );
}
