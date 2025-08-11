"use client";
import { TextGenerator } from "./TextGenerator";

export function ReadingComprehensionAssistant({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste the text here, followed by your questions. e.g., '[Article text] Questions: 1. What is the main idea? 2. Who was involved?'"
            buttonText="Get Answers"
            generatePrompt={(prompt) => 
                `You are a reading tutor. Read the following text and provide clear, concise answers to the questions that follow. Text and Questions: "${prompt}"`
            }
            resultTitle="Comprehension Answers"
        />
    );
}
