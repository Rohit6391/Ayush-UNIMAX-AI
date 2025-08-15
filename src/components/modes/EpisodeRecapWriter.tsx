
"use client";
import { TextGenerator } from "./TextGenerator";

export function EpisodeRecapWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'The latest episode of a popular fantasy TV show where a major character was revealed to be a traitor.'"
            buttonText="Write Recap"
            generatePrompt={(prompt) => 
                `You are a TV critic. Write an engaging recap of a TV show episode based on the following description. Summarize the key events and end with a cliffhanger or question for the next episode. Episode: "${prompt}"`
            }
            resultTitle="Episode Recap"
        />
    );
}

    