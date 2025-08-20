
"use client";
import { TextGenerator } from "./TextGenerator";

export function WeekendActivityPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Weekend activities for a couple in a big city.'"
            buttonText="Plan Weekend"
            generatePrompt={(p: string) => `You are a local guide. Suggest a plan for a weekend with three different activities (e.g., one for Friday night, Saturday, and Sunday) based on the user's request. Request: "${p}"`}
            resultTitle="Weekend Activity Plan"
        />
    );
}
