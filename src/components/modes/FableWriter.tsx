"use client";
import { TextGenerator } from "./TextGenerator";

export function FableWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A fable about a proud lion and a clever mouse.'"
            buttonText="Write Fable"
            generatePrompt={(prompt) => 
                `You are a writer of fables. Create a short fable with animal characters and a clear moral at the end, based on the following idea. Idea: "${prompt}"`
            }
            resultTitle="Generated Fable"
        />
    );
}
