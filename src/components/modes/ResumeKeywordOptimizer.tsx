"use client";
import { TextGenerator } from "./TextGenerator";

export function ResumeKeywordOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload your resume to optimize it with keywords."
            buttonText="Generate Optimized Resume"
            generatePrompt={(prompt) => `Optimize a resume: "${prompt}"`}
            resultTitle="Generated Optimized Resume"
        />
    );
}
