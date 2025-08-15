"use client";
import { TextGenerator } from "./TextGenerator";

export function JokeFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A joke about computers' or 'A funny one-liner'"
            buttonText="Find Joke"
            generatePrompt={(prompt) => 
                `You are a comedian. Tell me a short, family-friendly joke based on the following topic. Topic: "${prompt}"`
            }
            resultTitle="Joke"
        />
    );
}
