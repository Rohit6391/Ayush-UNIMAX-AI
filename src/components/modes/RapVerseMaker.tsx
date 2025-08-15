"use client";
import { TextGenerator } from "./TextGenerator";

export function RapVerseMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Write a rap verse about overcoming challenges'"
            buttonText="Make Verse"
            generatePrompt={(prompt) => 
                `You are a rap artist. Write a 4-line rap verse with a strong rhythm and rhyme scheme about the following topic: "${prompt}"`
            }
            resultTitle="Generated Rap Verse"
        />
    );
}
