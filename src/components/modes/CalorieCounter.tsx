
"use client";
import { TextGenerator } from "./TextGenerator";

export function CalorieCounter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A chicken breast, a cup of rice, and a side of broccoli.'"
            buttonText="Count Calories"
            generatePrompt={(prompt) => 
                `You are a dietitian. Provide a rough estimate of the total calorie count for the following meal. Include a disclaimer that this is an estimate. Meal: "${prompt}"`
            }
            resultTitle="Calorie Estimate"
        />
    );
}

    