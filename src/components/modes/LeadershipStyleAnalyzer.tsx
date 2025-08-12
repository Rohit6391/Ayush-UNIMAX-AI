"use client";
import { TextGenerator } from "./TextGenerator";

export function LeadershipStyleAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Answer a questionnaire to analyze your leadership style."
            buttonText="Generate Leadership Style"
            generatePrompt={(prompt) => `Analyze a leadership style: "${prompt}"`}
            resultTitle="Generated Leadership Style"
        />
    );
}
