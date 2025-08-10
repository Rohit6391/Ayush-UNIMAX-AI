"use client";
import { TextGenerator } from "./TextGenerator";

export function InterviewQuestionCreator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A senior software engineer specializing in React' or 'A marketing manager for a startup'"
            buttonText="Create Questions"
            generatePrompt={(prompt) => 
                `You are an expert HR manager and recruiter. Create a list of 10 insightful interview questions for the following job role. Include a mix of technical, behavioral, and situational questions, and briefly explain what each question aims to assess. Role: "${prompt}"`
            }
            resultTitle="Interview Questions"
        />
    );
}
