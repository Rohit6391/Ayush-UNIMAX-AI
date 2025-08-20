
"use client";
import { TextGenerator } from "./TextGenerator";

export function NutritionFactFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Nutrition facts for a medium apple.'"
            buttonText="Find Facts"
            generatePrompt={(p: string) => 
                `You are a nutritionist. Provide the basic nutrition facts (calories, protein, carbs, fat) for the following food item. Item: "${p}"`
            }
            resultTitle="Nutrition Facts"
        />
    );
}
