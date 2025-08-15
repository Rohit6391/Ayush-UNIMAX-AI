
"use client";
import { TextGenerator } from "./TextGenerator";

export function ChallengeIdeaGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 7-day challenge for learning a new skill.'"
            buttonText="Generate Challenge"
            generatePrompt={(prompt) => 
                `You are a creative planner. Suggest a fun and engaging challenge based on the user's idea. Outline a simple plan or daily tasks for the challenge. Idea: "${prompt}"`
            }
            resultTitle="Challenge Idea"
        />
    );
}

    