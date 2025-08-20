"use client";
import { TextGenerator } from "./TextGenerator";

export function PressReleaseWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A press release for a new product launch.'"
            buttonText="Write Press Release"
            generatePrompt={(p: string) => 
                `You are a public relations specialist. Write a standard press release for the following news. Include a headline, dateline, introduction, body, and contact information. News: "${p}"`
            }
            resultTitle="Press Release"
        />
    );
}
