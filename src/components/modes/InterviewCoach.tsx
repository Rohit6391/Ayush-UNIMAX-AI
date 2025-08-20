"use client";
import { TextGenerator } from "./TextGenerator";

export function InterviewCoach({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How should I answer \"Tell me about yourself\"?' or 'Prepare me for behavioral questions.'"
            buttonText="Get Coaching"
            generatePrompt={(prompt) => 
                `You are a professional interview coach. Provide advice, sample answers, and key points for the following interview question or topic. Request: "${prompt}"`
            }
            resultTitle="Interview Coaching"
        />
    );
}
