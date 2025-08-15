"use client";
import { TextGenerator } from "./TextGenerator";

export function ConceptExplainer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Explain quantum entanglement in simple terms'"
            buttonText="Explain Concept"
            generatePrompt={(prompt) => 
                `You are a master teacher. Explain the following concept in a clear, concise, and easy-to-understand way, using analogies and simple examples. Concept: "${prompt}"`
            }
            resultTitle="Concept Explanation"
        />
    );
}
