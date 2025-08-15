"use client";
import { TextGenerator } from "./TextGenerator";

export function AIDailyMotivationCoach({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'I need some motivation for a tough day ahead' or 'Give me a quote about perseverance'"
            buttonText="Get Motivation"
            generatePrompt={(prompt) => 
                `You are an AI Daily Motivation Coach. Provide a personalized motivational quote, affirmation, or a short action tip to keep users inspired. Request: "${prompt}"`
            }
            resultTitle="Your Daily Motivation"
        />
    );
}
