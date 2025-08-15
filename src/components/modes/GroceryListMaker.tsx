
"use client";
import { TextGenerator } from "./TextGenerator";

export function GroceryListMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="List the meals you want to make, e.g., 'Spaghetti bolognese, chicken salad, and oatmeal for breakfast.'"
            buttonText="Make List"
            generatePrompt={(prompt) => 
                `You are a personal assistant. Create an organized grocery list based on the ingredients needed for the following meals. Categorize the items (e.g., Produce, Dairy, Meat). Meals: "${prompt}"`
            }
            resultTitle="Grocery List"
        />
    );
}

    