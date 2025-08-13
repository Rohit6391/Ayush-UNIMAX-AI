"use client";
import { TextGenerator } from "./TextGenerator";

export function AIJokeWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Give me a topic for a joke."
            buttonText="Generate Joke"
            generatePrompt={(prompt) => `Write a joke about: "${prompt}"`}
            resultTitle="Generated Joke"
        />
    );
}
