"use client";
import { TextGenerator } from "./TextGenerator";

export function LogisticsRouteOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="List your start, end, and multi-stop points to get an optimized route."
            buttonText="Generate Optimized Route"
            generatePrompt={(prompt) => `Optimize a logistics route: "${prompt}"`}
            resultTitle="Generated Optimized Route"
        />
    );
}
