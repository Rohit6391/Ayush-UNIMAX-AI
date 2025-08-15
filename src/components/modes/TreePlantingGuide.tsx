"use client";
import { TextGenerator } from "./TextGenerator";

export function TreePlantingGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to plant a small tree in a backyard.'"
            buttonText="Get Planting Guide"
            generatePrompt={(prompt) => 
                `You are an arborist. Provide a simple, step-by-step guide for planting a tree correctly. Request: "${prompt}"`
            }
            resultTitle="Tree Planting Guide"
        />
    );
}
