"use client";
import { TextGenerator } from "./TextGenerator";

export function PrototypeDesignOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a prototype design to optimize it."
            buttonText="Generate Optimized Prototype"
            generatePrompt={(prompt) => `Optimize a prototype design: "${prompt}"`}
            resultTitle="Generated Optimized Prototype"
        />
    );
}
