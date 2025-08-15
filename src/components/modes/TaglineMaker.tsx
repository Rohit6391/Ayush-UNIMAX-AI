"use client";
import { TextGenerator } from "./TextGenerator";

export function TaglineMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'a new coffee brand that is organic and sustainable'"
            buttonText="Create Tagline"
            generatePrompt={(prompt) => 
                `You are a branding expert. Create five catchy and memorable taglines for a brand with the following description. Description: "${prompt}"`
            }
            resultTitle="Brand Taglines"
        />
    );
}
