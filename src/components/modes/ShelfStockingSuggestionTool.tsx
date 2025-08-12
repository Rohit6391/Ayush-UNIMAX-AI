"use client";
import { TextGenerator } from "./TextGenerator";

export function ShelfStockingSuggestionTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide sales data to get shelf stocking suggestions."
            buttonText="Generate Shelf Stocking Suggestions"
            generatePrompt={(prompt) => `Get shelf stocking suggestions: "${prompt}"`}
            resultTitle="Generated Shelf Stocking Suggestions"
        />
    );
}
