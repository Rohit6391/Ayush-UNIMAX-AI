"use client";
import { TextGenerator } from "./TextGenerator";

export function WorkplaceCultureFitAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe yourself to analyze your workplace culture fit."
            buttonText="Generate Culture Fit"
            generatePrompt={(prompt) => `Analyze workplace culture fit: "${prompt}"`}
            resultTitle="Generated Culture Fit"
        />
    );
}
