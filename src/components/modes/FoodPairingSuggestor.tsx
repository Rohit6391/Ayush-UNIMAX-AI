"use client";
import { TextGenerator } from "./TextGenerator";

export function FoodPairingSuggestor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'What wine pairs well with salmon?' or 'Suggest a food pairing for a hoppy IPA beer.'"
            buttonText="Get Pairing Suggestion"
            generatePrompt={(p: string) => 
                `You are an expert sommelier and chef. Suggest three excellent food or drink pairings for the following item. Explain why each pairing works. Item: "${p}"`
            }
            resultTitle="Food Pairing Suggestions"
        />
    );
}
