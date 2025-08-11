"use client";
import { TextGenerator } from "./TextGenerator";

export function ConceptMapGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Enter a topic to generate a concept map, e.g., 'Photosynthesis' or 'The American Revolution'"
            buttonText="Generate Map"
            generatePrompt={(prompt) => 
                `You are an educator. Create a concept map outlining the key ideas, sub-topics, and their connections for the following topic. Use a hierarchical text structure (e.g., using indentation or bullet points) to represent the map. Topic: "${prompt}"`
            }
            resultTitle="Concept Map"
        />
    );
}
