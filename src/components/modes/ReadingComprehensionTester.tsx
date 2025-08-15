"use client";
import { TextGenerator } from "./TextGenerator";

export function ReadingComprehensionTester({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A short passage about the Amazon rainforest for a 6th grade reading level'"
            buttonText="Generate Test"
            generatePrompt={(prompt) => 
                `You are an educator. Write a short reading comprehension passage on the given topic, followed by 3 questions (with an answer key) to test understanding. Topic: "${prompt}"`
            }
            resultTitle="Reading Comprehension Test"
        />
    );
}
