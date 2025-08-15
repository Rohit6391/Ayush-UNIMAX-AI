"use client";
import { TextGenerator } from "./TextGenerator";

export function GrammarQuizMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Create a quiz on verb tenses'"
            buttonText="Make Quiz"
            generatePrompt={(prompt) => 
                `You are a language teacher. Create a 5-question grammar quiz on the following topic. Include multiple-choice questions and an answer key. Topic: "${prompt}"`
            }
            resultTitle="Grammar Quiz"
        />
    );
}
