"use client";
import { TextGenerator } from "./TextGenerator";

export function SpeechWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 2-minute motivational speech about perseverance.'"
            buttonText="Write Speech"
            generatePrompt={(prompt) => 
                `You are a professional speechwriter. Write a short, impactful speech based on the following topic. The speech should be clear, concise, and engaging for the audience. Topic: "${prompt}"`
            }
            resultTitle="Generated Speech"
        />
    );
}
