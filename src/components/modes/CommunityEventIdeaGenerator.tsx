"use client";
import { TextGenerator } from "./TextGenerator";

export function CommunityEventIdeaGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Event ideas for a small town in the fall.'"
            buttonText="Generate Event Ideas"
            generatePrompt={(p: string) => 
                `You are a community organizer. Suggest three fun and engaging event ideas for a local community based on the following description. Description: "${p}"`
            }
            resultTitle="Community Event Ideas"
        />
    );
}
