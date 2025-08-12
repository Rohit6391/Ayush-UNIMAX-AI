"use client";
import { TextGenerator } from "./TextGenerator";

export function QualityControlInspectorAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a product to perform a virtual quality control inspection."
            buttonText="Generate Quality Inspection"
            generatePrompt={(prompt) => `Inspect quality control: "${prompt}"`}
            resultTitle="Generated Quality Inspection"
        />
    );
}
