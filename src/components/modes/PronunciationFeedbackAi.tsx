"use client";
import { TextGenerator } from "./TextGenerator";

export function PronunciationFeedbackAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Record your voice to get pronunciation feedback."
            buttonText="Generate Pronunciation Feedback"
            generatePrompt={(prompt) => `Get pronunciation feedback: "${prompt}"`}
            resultTitle="Generated Pronunciation Feedback"
        />
    );
}
