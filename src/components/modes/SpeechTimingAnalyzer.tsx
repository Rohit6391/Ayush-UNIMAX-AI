"use client";
import { TextGenerator } from "./TextGenerator";

export function SpeechTimingAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a speech to analyze its timing."
            buttonText="Generate Speech Timing"
            generatePrompt={(prompt) => `Analyze speech timing: "${prompt}"`}
            resultTitle="Generated Speech Timing"
        />
    );
}
