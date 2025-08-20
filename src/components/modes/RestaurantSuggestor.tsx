
"use client";
import { TextGenerator } from "./TextGenerator";

export function RestaurantSuggestor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A good Italian restaurant in my city for a date night.'"
            buttonText="Suggest Restaurant"
            generatePrompt={(p: string) => 
                `You are a food critic. Suggest three types of restaurants that would be suitable for the user's request. For each, describe the ambiance and what they're known for. Do not suggest specific, real-world restaurant names. Request: "${p}"`
            }
            resultTitle="Restaurant Suggestions"
        />
    );
}
