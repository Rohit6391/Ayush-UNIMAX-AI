"use client";
import { TextGenerator } from "./TextGenerator";

export function SleepCycleTrackerAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide sleep data to analyze your sleep cycle."
            buttonText="Generate Sleep Analysis"
            generatePrompt={(prompt) => `Analyze a sleep cycle: "${prompt}"`}
            resultTitle="Generated Sleep Analysis"
        />
    );
}
