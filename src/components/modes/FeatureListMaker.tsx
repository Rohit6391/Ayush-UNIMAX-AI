"use client";
import { TextGenerator } from "./TextGenerator";

export function FeatureListMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A new camera app with AI-powered filters.'"
            buttonText="Make Feature List"
            generatePrompt={(p: string) => 
                `You are a product manager. Create a list of key features for the following app or product, each with a brief, user-friendly description. Product: "${p}"`
            }
            resultTitle="Feature List"
        />
    );
}
