"use client";
import { TextGenerator } from "./TextGenerator";

export function AudioSceneIdentifier({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload an audio clip to identify the scene."
            buttonText="Generate Audio Scene"
            generatePrompt={(prompt) => `Identify an audio scene: "${prompt}"`}
            resultTitle="Generated Audio Scene"
        />
    );
}
