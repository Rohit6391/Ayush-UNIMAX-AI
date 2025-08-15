"use client";
import { TextGenerator } from "./TextGenerator";

export function PollQuestionMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'favorite pizza topping' or 'best movie genre'"
            buttonText="Make Question"
            generatePrompt={(prompt) => 
                `You are a social media manager. Suggest a simple and engaging poll question with 2-4 options based on the following topic. Topic: "${prompt}"`
            }
            resultTitle="Poll Question"
        />
    );
}
