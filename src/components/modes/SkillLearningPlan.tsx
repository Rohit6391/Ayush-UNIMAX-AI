"use client";
import { TextGenerator } from "./TextGenerator";

export function SkillLearningPlan({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Create a plan to learn how to play the guitar in 3 months.'"
            buttonText="Create Learning Plan"
            generatePrompt={(p: string) => `You are an expert educator. Create a structured, week-by-week learning plan for the following skill. Include key milestones and resources to use. Skill: "${p}"`}
            resultTitle="Skill Learning Plan"
        />
    );
}
