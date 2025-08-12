"use client";
import { TextGenerator } from "./TextGenerator";

export function PackagingDesignFeedbackAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a packaging design to get feedback."
            buttonText="Generate Packaging Feedback"
            generatePrompt={(prompt) => `Get packaging design feedback: "${prompt}"`}
            resultTitle="Generated Packaging Feedback"
        />
    );
}
