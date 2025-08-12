"use client";
import { TextGenerator } from "./TextGenerator";

export function AssignmentFeedbackGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload an assignment to generate feedback."
            buttonText="Generate Assignment Feedback"
            generatePrompt={(prompt) => `Generate assignment feedback: "${prompt}"`}
            resultTitle="Generated Assignment Feedback"
        />
    );
}
