"use client";
import { TextGenerator } from "./TextGenerator";

export function VisualStoryMapper({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Map out the plot of a hero's journey'"
            buttonText="Map Story"
            generatePrompt={(p: string) => `You are a narrative structure expert. Create a text-based visual map (using indentation and bullet points) of a story's plot based on the user's request. Request: "${p}"`}
            resultTitle="Visual Story Map"
        />
    );
}
