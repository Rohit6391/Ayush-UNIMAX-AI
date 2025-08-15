"use client";
import { TextGenerator } from "./TextGenerator";

export function EventNameGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A summer music festival focused on indie bands'"
            buttonText="Generate Event Names"
            generatePrompt={(prompt) => 
                `You are a professional event planner. Suggest 10 creative and catchy names for an event with the following description: "${prompt}"`
            }
            resultTitle="Event Name Ideas"
        />
    );
}
