
"use client";
import { TextGenerator } from "./TextGenerator";

export function FoodAllergyAlertGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A guide for dealing with a peanut allergy.'"
            buttonText="Get Allergy Guide"
            generatePrompt={(prompt) => 
                `You are a health expert. Provide a simple guide on precautions for the following food allergy. Include tips for reading labels and dining out. Allergy: "${prompt}"`
            }
            resultTitle="Food Allergy Guide"
        />
    );
}
