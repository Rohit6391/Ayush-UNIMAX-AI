"use client";
import { TextGenerator } from "./TextGenerator";

export function CoverLetterPersonalizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a job description to personalize your cover letter."
            buttonText="Generate Personalized Cover Letter"
            generatePrompt={(prompt) => `Personalize a cover letter: "${prompt}"`}
            resultTitle="Generated Personalized Cover Letter"
        />
    );
}
