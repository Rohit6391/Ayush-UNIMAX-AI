"use client";
import { TextGenerator } from "./TextGenerator";

export function DigitalPersonaCreator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A busy working mother who values convenience and health' or 'A college student on a budget who loves gaming'"
            buttonText="Create Persona"
            generatePrompt={(prompt) => 
                `You are a marketing and product design expert. Create a detailed user persona based on the following description. Include demographics, goals, frustrations, motivations, and a brief biography. Persona description: "${prompt}"`
            }
            resultTitle="Digital User Persona"
        />
    );
}
