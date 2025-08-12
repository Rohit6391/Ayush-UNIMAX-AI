"use client";
import { TextGenerator } from "./TextGenerator";

export function BuildingEnergyEfficiencyAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide building data to analyze its energy efficiency."
            buttonText="Generate Energy Efficiency Analysis"
            generatePrompt={(prompt) => `Analyze building energy efficiency: "${prompt}"`}
            resultTitle="Generated Energy Efficiency Analysis"
        />
    );
}
