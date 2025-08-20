"use client";
import { TextGenerator } from "./TextGenerator";

export function FoodAllergyAlertGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A guide for dealing with a peanut allergy.'"
            buttonText="Get Allergy Guide"
            generatePrompt={(p: string) => 
                `You are a health expert. Provide a simple guide on precautions for the following food allergy. Include tips for reading labels and dining out. Allergy: "${p}"`
            }
            resultTitle="Food Allergy Guide"
        />
    );
}
