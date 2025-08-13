"use client";
import { TextGenerator } from "./TextGenerator";

export function AITeacher({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Explain the theory of relativity like I'm five' or 'Teach me the basics of Python programming.'"
            buttonText="Get Lesson"
            generatePrompt={(prompt) => 
                `You are a patient and knowledgeable AI Teacher. Explain the following concept clearly and concisely, using analogies and simple terms where possible. Concept: "${prompt}"`
            }
            resultTitle="AI Teacher's Lesson"
        />
    );
}
