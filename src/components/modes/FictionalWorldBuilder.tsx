"use client";
import { TextGenerator } from "./TextGenerator";

export function FictionalWorldBuilder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A steampunk city that floats in the sky' or 'An underwater kingdom of mer-people'"
            buttonText="Build World"
            generatePrompt={(prompt) => 
                `You are an expert world-builder and storyteller. Based on the following concept, create a detailed description of a fictional world. Include details about its geography, culture, inhabitants, technology, and potential conflicts. Concept: "${prompt}"`
            }
            resultTitle="Fictional World"
        />
    );
}
