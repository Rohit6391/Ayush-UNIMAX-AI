"use client";
import { TextGenerator } from "./TextGenerator";

export function RoadSafetyTips({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Safety tips for driving in heavy rain.'"
            buttonText="Get Safety Tips"
            generatePrompt={(prompt) => 
                `You are a driving instructor. Provide a list of 5 important road safety tips for the following situation. Situation: "${prompt}"`
            }
            resultTitle="Road Safety Tips"
        />
    );
}
