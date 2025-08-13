"use client";
import { TextGenerator } from "./TextGenerator";

export function ExerciseRoutineOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your fitness goals to get an optimized exercise routine."
            buttonText="Generate Optimized Routine"
            generatePrompt={(prompt) => `Optimize an exercise routine: "${prompt}"`}
            resultTitle="Generated Optimized Routine"
        />
    );
}
