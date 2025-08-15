
"use client";
import { TextGenerator } from "./TextGenerator";

export function RecipeWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A simple recipe for chocolate chip cookies'"
            buttonText="Write Recipe"
            generatePrompt={(prompt) => 
                `You are a chef. Write a clear, step-by-step recipe for the following dish. Include an ingredient list with measurements, and instructions for preparation and cooking. Dish: "${prompt}"`
            }
            resultTitle="Recipe"
        />
    );
}

    