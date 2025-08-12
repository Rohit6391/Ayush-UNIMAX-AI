"use client";
import { TextGenerator } from "./TextGenerator";

export function TournamentScheduleOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide tournament data to optimize the schedule."
            buttonText="Generate Optimized Tournament Schedule"
            generatePrompt={(prompt) => `Optimize a tournament schedule: "${prompt}"`}
            resultTitle="Generated Optimized Tournament Schedule"
        />
    );
}
