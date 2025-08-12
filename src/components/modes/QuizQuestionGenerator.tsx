"use client";
import { TextGenerator } from "./TextGenerator";

export function QuizQuestionGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a topic to generate quiz questions."
            buttonText="Generate Quiz Questions"
            generatePrompt={(prompt) => `Generate quiz questions: "${prompt}"`}
            resultTitle="Generated Quiz Questions"
        />
    );
}
