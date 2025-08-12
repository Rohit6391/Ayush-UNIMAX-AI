"use client";
import { TextGenerator } from "./TextGenerator";

export function PublicTransitRouteOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide transit data to optimize routes."
            buttonText="Generate Optimized Transit Route"
            generatePrompt={(prompt) => `Optimize public transit routes: "${prompt}"`}
            resultTitle="Generated Optimized Transit Route"
        />
    );
}
