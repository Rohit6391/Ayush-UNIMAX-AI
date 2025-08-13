"use client";
import { TextGenerator } from "./TextGenerator";

export function ClinicalTrialDataAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide clinical trial data to analyze."
            buttonText="Generate Clinical Trial Analysis"
            generatePrompt={(prompt) => `Analyze clinical trial data: "${prompt}"`}
            resultTitle="Generated Clinical Trial Analysis"
        />
    );
}
