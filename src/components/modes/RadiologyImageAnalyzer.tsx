"use client";
import { TextGenerator } from "./TextGenerator";

export function RadiologyImageAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a radiology image to analyze."
            buttonText="Generate Radiology Analysis"
            generatePrompt={(prompt) => `Analyze a radiology image: "${prompt}"`}
            resultTitle="Generated Radiology Analysis"
        />
    );
}
