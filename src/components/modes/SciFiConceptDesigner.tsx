"use client";
import { TextGenerator } from "./TextGenerator";

export function SciFiConceptDesigner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A new type of faster-than-light travel' or 'A society where memories can be bought and sold.'"
            buttonText="Design Concept"
            generatePrompt={(prompt) => 
                `You are a science fiction author. Take the following high-level concept and flesh it out with details. Consider the scientific principles (even if speculative), societal implications, and potential story hooks. Concept: "${prompt}"`
            }
            resultTitle="Sci-Fi Concept"
        />
    );
}
