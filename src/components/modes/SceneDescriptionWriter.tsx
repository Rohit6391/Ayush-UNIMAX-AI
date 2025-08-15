"use client";
import { TextGenerator } from "./TextGenerator";

export function SceneDescriptionWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Describe a bustling medieval marketplace at noon'"
            buttonText="Write Scene"
            generatePrompt={(prompt) => 
                `You are a novelist. Write a vivid and sensory-rich description of the following scene, focusing on what the character sees, hears, smells, and feels. Scene: "${prompt}"`
            }
            resultTitle="Scene Description"
        />
    );
}
