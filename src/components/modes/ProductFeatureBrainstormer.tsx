"use client";
import { TextGenerator } from "./TextGenerator";

export function ProductFeatureBrainstormer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A new fitness tracking app' or 'A smart coffee mug'"
            buttonText="Brainstorm Features"
            generatePrompt={(prompt) => 
                `You are an innovative product manager. Brainstorm a list of 10 creative and useful features for the following product concept. For each feature, provide a brief description of what it does and the user benefit. Product: "${prompt}"`
            }
            resultTitle="Product Features"
        />
    );
}
