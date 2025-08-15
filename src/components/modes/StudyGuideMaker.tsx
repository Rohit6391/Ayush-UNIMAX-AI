"use client";
import { TextGenerator } from "./TextGenerator";

export function StudyGuideMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Create a study guide for a final exam on American history'"
            buttonText="Make Guide"
            generatePrompt={(prompt) => 
                `You are a tutor. Create a condensed, easy-to-read study guide for the following topic. Organize it with clear headings, key terms, and bullet points. Topic: "${prompt}"`
            }
            resultTitle="Generated Study Guide"
        />
    );
}
