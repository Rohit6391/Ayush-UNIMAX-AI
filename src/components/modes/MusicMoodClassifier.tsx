"use client";
import { TextGenerator } from "./TextGenerator";

export function MusicMoodClassifier({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a song to classify its mood."
            buttonText="Generate Music Mood"
            generatePrompt={(prompt) => `Classify music mood: "${prompt}"`}
            resultTitle="Generated Music Mood"
        />
    );
}
