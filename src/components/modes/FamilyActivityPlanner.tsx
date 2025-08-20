
"use client";
import { TextGenerator } from "./TextGenerator";

export function FamilyActivityPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Fun family activities for a rainy day with young children.'"
            buttonText="Plan Family Activities"
            generatePrompt={(p: string) => `You are a family activity planner. Suggest three fun, age-appropriate activities for a family based on their situation. Situation: "${p}"`}
            resultTitle="Family Activity Plan"
        />
    );
}
