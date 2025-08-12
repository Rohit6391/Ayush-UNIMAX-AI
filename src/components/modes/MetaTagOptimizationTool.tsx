"use client";
import { TextGenerator } from "./TextGenerator";

export function MetaTagOptimizationTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a URL to optimize its meta tags."
            buttonText="Generate Optimized Meta Tags"
            generatePrompt={(prompt) => `Optimize meta tags: "${prompt}"`}
            resultTitle="Generated Optimized Meta Tags"
        />
    );
}
