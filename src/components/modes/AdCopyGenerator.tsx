"use client";
import { TextGenerator } from "./TextGenerator";

export function AdCopyGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your product and target audience."
            buttonText="Generate Ad Copy"
            generatePrompt={(prompt) => `Write compelling ad copy for: "${prompt}"`}
            resultTitle="Generated Ad Copy"
        />
    );
}
