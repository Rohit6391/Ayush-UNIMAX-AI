"use client";
import { TextGenerator } from "./TextGenerator";

export function BrandNameIdeaGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your brand to get name ideas."
            buttonText="Generate Brand Names"
            generatePrompt={(prompt) => `Get brand name ideas: "${prompt}"`}
            resultTitle="Generated Brand Names"
        />
    );
}
