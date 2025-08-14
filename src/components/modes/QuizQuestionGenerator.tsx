"use client";
import { TextGenerator } from "./TextGenerator";

export function QuizQuestionGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a topic to generate quiz questions."
            buttonText="Generate Quiz Questions"
            generatePrompt={(prompt) => `Generate a 5-question multiple-choice quiz about the following topic. Include an answer key at the end. Topic: "${prompt}"`}
            resultTitle="Generated Quiz Questions"
        />
    );
}
