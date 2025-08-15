"use client";
import { TextGenerator } from "./TextGenerator";

export function ExamQuestionGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Create 5 multiple-choice questions about the solar system'"
            buttonText="Generate Questions"
            generatePrompt={(prompt) => 
                `You are a teacher. Create a set of exam questions based on the user's request. Include a variety of question types (e.g., multiple-choice, short answer) and provide an answer key. Request: "${prompt}"`
            }
            resultTitle="Exam Questions"
        />
    );
}
