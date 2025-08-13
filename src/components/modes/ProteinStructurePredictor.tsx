"use client";
import { TextGenerator } from "./TextGenerator";

export function ProteinStructurePredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a protein sequence to predict its structure."
            buttonText="Generate Protein Structure"
            generatePrompt={(prompt) => `Predict a protein structure: "${prompt}"`}
            resultTitle="Generated Protein Structure"
        />
    );
}
