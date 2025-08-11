"use client";
import { TextGenerator } from "./TextGenerator";

export function IdiomAndMetaphorFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste text here to find idiomatic expressions..."
            buttonText="Find Expressions"
            generatePrompt={(prompt) => 
                `You are a linguist. Identify all idioms, metaphors, and other figures of speech in the following text. For each one you find, provide a brief explanation of its meaning. Text: "${prompt}"`
            }
            resultTitle="Idioms and Metaphors"
        />
    );
}
