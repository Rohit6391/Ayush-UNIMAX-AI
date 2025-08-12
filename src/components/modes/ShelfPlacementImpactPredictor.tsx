"use client";
import { TextGenerator } from "./TextGenerator";

export function ShelfPlacementImpactPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a product to predict its shelf placement impact."
            buttonText="Generate Shelf Placement Impact"
            generatePrompt={(prompt) => `Predict shelf placement impact: "${prompt}"`}
            resultTitle="Generated Shelf Placement Impact"
        />
    );
}
