
"use client";
import { TextGenerator } from "./TextGenerator";

export function CocktailRecipeMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A classic Old Fashioned' or 'A refreshing gin and tonic with a twist'"
            buttonText="Create Cocktail Recipe"
            generatePrompt={(p: string) => 
                `You are an expert mixologist. Create a detailed recipe for the following cocktail. Include a list of ingredients with precise measurements, step-by-step instructions, and the proper glassware to use. Cocktail: "${p}"`
            }
            resultTitle="Cocktail Recipe"
        />
    );
}
