"use client";
import { TextGenerator } from "./TextGenerator";

export function SafeCookingTemperatureGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'What is the safe internal temperature for cooking chicken?'"
            buttonText="Get Temperature Guide"
            generatePrompt={(prompt) => 
                `You are a food safety expert. Provide the safe internal cooking temperature for the specified food item. Include a brief explanation of why it's important. Food: "${prompt}"`
            }
            resultTitle="Safe Cooking Temperature"
        />
    );
}
