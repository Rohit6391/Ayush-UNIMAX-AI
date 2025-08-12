"use client";
import { TextGenerator } from "./TextGenerator";

export function LevelDesignAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a game to get level design assistance."
            buttonText="Generate Level Design"
            generatePrompt={(prompt) => `Get level design assistance: "${prompt}"`}
            resultTitle="Generated Level Design"
        />
    );
}
