"use client";
import { TextGenerator } from "./TextGenerator";

export function SportsSkillsTrainer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to shoot a basketball' or 'Drills for improving soccer dribbling'"
            buttonText="Get Sports Skills Training"
            generatePrompt={(prompt) => 
                `You are an expert sports coach. Provide a step-by-step guide on how to learn or improve the following sports skill. Include common mistakes and drills to practice. Skill: "${prompt}"`
            }
            resultTitle="Sports Skills Training"
        />
    );
}
