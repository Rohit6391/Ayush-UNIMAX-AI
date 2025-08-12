"use client";
import { TextGenerator } from "./TextGenerator";

export function SkillEndorsementAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide your skills to analyze endorsements."
            buttonText="Generate Skill Endorsements"
            generatePrompt={(prompt) => `Analyze skill endorsements: "${prompt}"`}
            resultTitle="Generated Skill Endorsements"
        />
    );
}
