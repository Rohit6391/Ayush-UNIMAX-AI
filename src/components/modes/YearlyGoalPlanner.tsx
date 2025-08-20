
"use client";
import { TextGenerator } from "./TextGenerator";

export function YearlyGoalPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Plan my goals for the new year, including health, career, and personal projects.'"
            buttonText="Plan Yearly Goals"
            generatePrompt={(p: string) => `You are a goal-setting expert. Create a structured plan for yearly goals based on the user's request. Break down the year into quarters and suggest a major focus for each quarter. Request: "${p}"`}
            resultTitle="Yearly Goal Plan"
        />
    );
}
