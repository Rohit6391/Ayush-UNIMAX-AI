"use client";
import { TextGenerator } from "./TextGenerator";

export function ProfessionalBioGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide your details to generate a professional bio."
            buttonText="Generate Professional Bio"
            generatePrompt={(prompt) => `Generate a professional bio: "${prompt}"`}
            resultTitle="Generated Professional Bio"
        />
    );
}
