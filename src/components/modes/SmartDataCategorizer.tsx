"use client";
import { TextGenerator } from "./TextGenerator";

export function SmartDataCategorizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste a list of items to categorize, e.g., 'apple, chair, banana, table, orange'"
            buttonText="Categorize Data"
            generatePrompt={(prompt) => 
                `You are a data analyst. Categorize the following list of items into the most logical groups and provide a name for each group. Items: "${prompt}"`
            }
            resultTitle="Categorized Data"
        />
    );
}
