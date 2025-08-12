"use client";
import { TextGenerator } from "./TextGenerator";

export function ExamPatternAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide exam data to analyze patterns."
            buttonText="Generate Exam Patterns"
            generatePrompt={(prompt) => `Analyze exam patterns: "${prompt}"`}
            resultTitle="Generated Exam Patterns"
        />
    );
}
