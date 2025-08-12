"use client";
import { TextGenerator } from "./TextGenerator";

export function StudyGroupMatchingAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide your profile to get matched with a study group."
            buttonText="Generate Study Groups"
            generatePrompt={(prompt) => `Match with a study group: "${prompt}"`}
            resultTitle="Generated Study Groups"
        />
    );
}
