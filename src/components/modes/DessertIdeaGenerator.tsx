"use client";
import { TextGenerator } from "./TextGenerator";

export function DessertIdeaGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A light and fruity dessert for a summer party' or 'A decadent chocolate dessert for a special occasion'"
            buttonText="Generate Dessert Ideas"
            generatePrompt={(prompt) => 
                `You are a pastry chef. Suggest three creative and delicious dessert ideas based on the following request. Include a brief description of each. Request: "${prompt}"`
            }
            resultTitle="Dessert Ideas"
        />
    );
}
