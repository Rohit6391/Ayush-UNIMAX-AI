"use client";
import { TextGenerator } from "./TextGenerator";

export function ProductPrototypeFeedbackAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a prototype to get feedback."
            buttonText="Generate Prototype Feedback"
            generatePrompt={(prompt) => `Get prototype feedback: "${prompt}"`}
            resultTitle="Generated Prototype Feedback"
        />
    );
}
