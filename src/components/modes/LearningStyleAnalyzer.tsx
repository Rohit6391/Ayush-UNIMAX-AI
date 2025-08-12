"use client";
import { TextGenerator } from "./TextGenerator";

export function LearningStyleAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Answer a questionnaire to analyze your learning style."
            buttonText="Generate Learning Style"
            generatePrompt={(prompt) => `Analyze a learning style: "${prompt}"`}
            resultTitle="Generated Learning Style"
        />
    );
}
