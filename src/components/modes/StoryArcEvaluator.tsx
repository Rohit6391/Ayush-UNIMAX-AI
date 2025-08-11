"use client";
import { TextGenerator } from "./TextGenerator";

export function StoryArcEvaluator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste a summary of your story or character's journey here."
            buttonText="Evaluate Arc"
            generatePrompt={(prompt) => 
                `You are a story editor. Evaluate the following story or character arc for completeness and satisfaction. Does it follow a logical progression (e.g., setup, confrontation, resolution)? Where could it be strengthened? Story: "${prompt}"`
            }
            resultTitle="Story Arc Evaluation"
        />
    );
}
