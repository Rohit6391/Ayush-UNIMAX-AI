"use client";
import { TextGenerator } from "./TextGenerator";

export function ClassroomEngagementTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a class to track and analyze engagement."
            buttonText="Generate Classroom Engagement"
            generatePrompt={(prompt) => `Track classroom engagement: "${prompt}"`}
            resultTitle="Generated Classroom Engagement"
        />
    );
}
