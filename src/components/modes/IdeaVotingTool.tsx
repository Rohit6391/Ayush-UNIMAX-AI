
"use client";
import { TextGenerator } from "./TextGenerator";

export function IdeaVotingTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="List ideas to be voted on."
            buttonText="Create Voting Poll"
            generatePrompt={(prompt) => `Create a voting poll for the ideas: "${prompt}"`}
            resultTitle="Voting Poll"
        />
    );
}

    