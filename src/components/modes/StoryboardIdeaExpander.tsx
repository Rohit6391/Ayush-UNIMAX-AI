"use client";
import { TextGenerator } from "./TextGenerator";

export function StoryboardIdeaExpander({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A cat discovers a magical portal in its backyard' or 'A detective chases a suspect through a futuristic city'"
            buttonText="Expand Storyboard"
            generatePrompt={(prompt) => 
                `You are a screenwriter and storyboard artist. Take the following one-line storyboard idea and expand it into a 3-scene summary. For each scene, describe the setting, character actions, and key visual elements. Idea: "${prompt}"`
            }
            resultTitle="Expanded Storyboard Idea"
        />
    );
}
