"use client";
import { TextGenerator } from "./TextGenerator";

export function FactReferenceLinkGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a fact to generate a reference link."
            buttonText="Generate Fact-Reference Links"
            generatePrompt={(prompt) => `Generate a fact-reference link: "${prompt}"`}
            resultTitle="Generated Fact-Reference Links"
        />
    );
}
