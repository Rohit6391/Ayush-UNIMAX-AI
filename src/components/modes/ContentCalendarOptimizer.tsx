"use client";
import { TextGenerator } from "./TextGenerator";

export function ContentCalendarOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a content calendar to optimize it."
            buttonText="Generate Optimized Content Calendar"
            generatePrompt={(prompt) => `Optimize a content calendar: "${prompt}"`}
            resultTitle="Generated Optimized Content Calendar"
        />
    );
}
