"use client";
import { TextGenerator } from "./TextGenerator";

export function AccessoryStyleMatcher({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe an outfit to get accessory recommendations."
            buttonText="Generate Accessory Recommendations"
            generatePrompt={(prompt) => `Match accessories to styles: "${prompt}"`}
            resultTitle="Generated Accessory Recommendations"
        />
    );
}
