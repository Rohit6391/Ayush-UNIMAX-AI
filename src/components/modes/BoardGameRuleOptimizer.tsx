"use client";
import { TextGenerator } from "./TextGenerator";

export function BoardGameRuleOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a board game to optimize its rules."
            buttonText="Generate Optimized Rules"
            generatePrompt={(prompt) => `Optimize board game rules: "${prompt}"`}
            resultTitle="Generated Optimized Rules"
        />
    );
}
