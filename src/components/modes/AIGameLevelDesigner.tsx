"use client";
import { TextGenerator } from "./TextGenerator";

export function AIGameLevelDesigner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe the game and level theme."
            buttonText="Generate Level Design"
            generatePrompt={(prompt) => `Design a game level for: "${prompt}"`}
            resultTitle="Generated Level Design"
        />
    );
}
