
"use client";
import { TextGenerator } from "./TextGenerator";

export function GreenProductSuggestor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Eco-friendly alternatives to plastic wrap.'"
            buttonText="Suggest Green Products"
            generatePrompt={(p: string) => 
                `You are a sustainability expert. Suggest three eco-friendly product alternatives for the following item or category. Item/Category: "${p}"`
            }
            resultTitle="Green Product Suggestions"
        />
    );
}
