"use client";
import { TextGenerator } from "./TextGenerator";

export function PublicOpinionTrendAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a topic to analyze public opinion trends."
            buttonText="Generate Public Opinion Analysis"
            generatePrompt={(prompt) => `Analyze public opinion trends: "${prompt}"`}
            resultTitle="Generated Public Opinion Analysis"
        />
    );
}
