"use client";
import { TextGenerator } from "./TextGenerator";

export function LeftoverRecipeMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Cooked chicken, rice, and a can of black beans.'"
            buttonText="Create Recipe"
            generatePrompt={(p: string) => 
                `You are a resourceful chef specializing in using leftovers. Create a simple recipe using the following leftover ingredients. Include a name for the dish, a list of ingredients, and step-by-step instructions. Leftovers: "${p}"`
            }
            resultTitle="Leftover Recipe Idea"
        />
    );
}
