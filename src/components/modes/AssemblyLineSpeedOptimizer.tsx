"use client";
import { TextGenerator } from "./TextGenerator";

export function AssemblyLineSpeedOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe an assembly line to optimize its speed."
            buttonText="Generate Optimized Speed"
            generatePrompt={(prompt) => `Optimize assembly line speed: "${prompt}"`}
            resultTitle="Generated Optimized Speed"
        />
    );
}
