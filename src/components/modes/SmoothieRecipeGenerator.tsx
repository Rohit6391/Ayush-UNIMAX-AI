
"use client";
import { TextGenerator } from "./TextGenerator";

export function SmoothieRecipeGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A green smoothie for energy' or 'A berry smoothie with protein'"
            buttonText="Generate Smoothie Recipe"
            generatePrompt={(p: string) => 
                `You are a nutritionist. Create a delicious and healthy smoothie recipe based on the following request. Include a list of ingredients and blending instructions. Request: "${p}"`
            }
            resultTitle="Smoothie Recipe"
        />
    );
}
