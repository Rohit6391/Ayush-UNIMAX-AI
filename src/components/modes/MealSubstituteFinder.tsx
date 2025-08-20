
"use client";
import { TextGenerator } from "./TextGenerator";

export function MealSubstituteFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'What can I use instead of eggs in a cake recipe?'"
            buttonText="Find Substitute"
            generatePrompt={(p: string) => 
                `You are a chef and food scientist. For the following ingredient, suggest three suitable substitutes and explain how to use them. Ingredient: "${p}"`
            }
            resultTitle="Ingredient Substitutes"
        />
    );
}
