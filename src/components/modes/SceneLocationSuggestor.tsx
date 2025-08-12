"use client";
import { TextGenerator } from "./TextGenerator";

export function SceneLocationSuggestor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a scene to get location suggestions."
            buttonText="Generate Location Suggestions"
            generatePrompt={(prompt) => `Suggest scene locations: "${prompt}"`}
            resultTitle="Generated Location Suggestions"
        />
    );
}
