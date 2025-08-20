"use client";
import { TextGenerator } from "./TextGenerator";

export function TrafficUpdateWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Traffic update for the I-5 corridor during rush hour.'"
            buttonText="Write Update"
            generatePrompt={(p: string) => 
                `You are a traffic reporter. Write a brief traffic update for the following area. Area: "${p}"`
            }
            resultTitle="Traffic Update"
        />
    );
}
