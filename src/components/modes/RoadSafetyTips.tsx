
"use client";
import { TextGenerator } from "./TextGenerator";

export function RoadSafetyTips({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Safety tips for driving in heavy rain.'"
            buttonText="Get Safety Tips"
            generatePrompt={(p: string) => 
                `You are a driving instructor. Provide a list of 5 important road safety tips for the following situation. Situation: "${p}"`
            }
            resultTitle="Road Safety Tips"
        />
    );
}
