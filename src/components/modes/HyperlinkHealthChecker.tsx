"use client";
import { TextGenerator } from "./TextGenerator";

export function HyperlinkHealthChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload text to check the health of its hyperlinks."
            buttonText="Generate Hyperlink Health"
            generatePrompt={(prompt) => `Check hyperlink health: "${prompt}"`}
            resultTitle="Generated Hyperlink Health"
        />
    );
}
