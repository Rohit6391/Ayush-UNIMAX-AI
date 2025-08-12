"use client";
import { TextGenerator } from "./TextGenerator";

export function OnboardingExperiencePlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a new role to plan the onboarding experience."
            buttonText="Generate Onboarding Plan"
            generatePrompt={(prompt) => `Plan an onboarding experience: "${prompt}"`}
            resultTitle="Generated Onboarding Plan"
        />
    );
}
