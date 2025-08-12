"use client";
import { TextGenerator } from "./TextGenerator";

export function JewelryDesignSuggestor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a style to get jewelry design suggestions."
            buttonText="Generate Jewelry Design Suggestions"
            generatePrompt={(prompt) => `Get jewelry design suggestions: "${prompt}"`}
            resultTitle="Generated Jewelry Design Suggestions"
        />
    );
}
