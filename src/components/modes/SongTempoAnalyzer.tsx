"use client";
import { TextGenerator } from "./TextGenerator";

export function SongTempoAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a song to analyze its tempo."
            buttonText="Generate Song Tempo"
            generatePrompt={(prompt) => `Analyze song tempo: "${prompt}"`}
            resultTitle="Generated Song Tempo"
        />
    );
}
