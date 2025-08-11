"use client";
import { TextGenerator } from "./TextGenerator";

export function MythologyBasedPlotCreator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Name a myth or mythological figure and a genre. e.g., 'The myth of Icarus as a modern corporate thriller.'"
            buttonText="Create Plot"
            generatePrompt={(prompt) => 
                `You are a creative writer and mythologist. Create a unique story plot based on the provided mythological figure or story, but reimagined in the specified genre. Request: "${prompt}"`
            }
            resultTitle="Mythology-Based Plot"
        />
    );
}
