"use client";
import { TextGenerator } from "./TextGenerator";

export function CadDesignSuggestionTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a CAD design to get suggestions."
            buttonText="Generate CAD Design Suggestions"
            generatePrompt={(prompt) => `Get CAD design suggestions: "${prompt}"`}
            resultTitle="Generated CAD Design Suggestions"
        />
    );
}
