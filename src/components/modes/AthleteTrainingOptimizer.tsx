"use client";
import { TextGenerator } from "./TextGenerator";

export function AthleteTrainingOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide athlete data to optimize a training plan."
            buttonText="Generate Optimized Training Plan"
            generatePrompt={(prompt) => `Optimize an athlete's training: "${prompt}"`}
            resultTitle="Generated Optimized Training Plan"
        />
    );
}
