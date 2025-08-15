
"use client";
import { TextGenerator } from "./TextGenerator";

export function MealPlanGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 3-day healthy meal plan for someone who is vegetarian.'"
            buttonText="Generate Plan"
            generatePrompt={(prompt) => 
                `You are a nutritionist. Create a simple and balanced meal plan based on the following request. Include suggestions for breakfast, lunch, and dinner. Request: "${prompt}"`
            }
            resultTitle="Meal Plan"
        />
    );
}

    