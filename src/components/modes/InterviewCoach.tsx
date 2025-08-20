"use client";
import { TextGenerator } from "./TextGenerator";

export function InterviewCoach({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How should I answer \"Tell me about yourself\"?' or 'Prepare me for behavioral questions.'"
            buttonText="Get Coaching"
            generatePrompt={(prompt) => 
                `You are an expert interview coach. Provide a detailed, professional response and actionable feedback for the following interview question or topic. Question/Topic: \"${prompt}\"`
            }
            resultTitle="Interview Coaching"
        />
    );
}
