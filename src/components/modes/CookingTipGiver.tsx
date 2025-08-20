
"use client";
import { TextGenerator } from "./TextGenerator";

export function CookingTipGiver({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to perfectly sear a steak' or 'Tips for baking fluffy cakes'"
            buttonText="Get Cooking Tips"
            generatePrompt={(p: string) => 
                `You are a master chef. Provide three useful cooking tips for the following topic or technique. Topic: "${p}"`
            }
            resultTitle="Cooking Tips"
        />
    );
}
