"use client";
import { TextGenerator } from "./TextGenerator";

export function LanguageLearningPathOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Choose a language to get an optimized learning path."
            buttonText="Generate Optimized Learning Path"
            generatePrompt={(prompt) => `Optimize a language learning path: "${prompt}"`}
            resultTitle="Generated Optimized Learning Path"
        />
    );
}
