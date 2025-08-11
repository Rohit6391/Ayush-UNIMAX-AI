"use client";
import { TextGenerator } from "./TextGenerator";

export function ToneAndMoodAdjuster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste your text, then describe the desired tone. e.g., '[Your text here] Tone: friendly and professional'"
            buttonText="Adjust Tone"
            generatePrompt={(prompt) => 
                `You are an expert copywriter. Rewrite the following text to have the specified tone and mood, while preserving the core message. Text and Tone: "${prompt}"`
            }
            resultTitle="Adjusted Text"
        />
    );
}
