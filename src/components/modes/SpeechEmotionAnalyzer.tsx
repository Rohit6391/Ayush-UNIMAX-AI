"use client";
import { TextGenerator } from "./TextGenerator";

export function SpeechEmotionAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a speech clip to analyze the emotion."
            buttonText="Generate Speech Emotion"
            generatePrompt={(prompt) => `Analyze speech emotion: "${prompt}"`}
            resultTitle="Generated Speech Emotion"
        />
    );
}
