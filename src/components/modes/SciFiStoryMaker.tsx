"use client";
import { TextGenerator } from "./TextGenerator";

export function SciFiStoryMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A story about the first contact with an alien species.'"
            buttonText="Make Sci-Fi Story"
            generatePrompt={(prompt) => 
                `You are a sci-fi writer. Create a short story plot outline based on the prompt, including the main technology, the central conflict, and the resolution. Prompt: "${prompt}"`
            }
            resultTitle="Sci-Fi Story Plot"
        />
    );
}
