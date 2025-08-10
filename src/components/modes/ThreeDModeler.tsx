"use client";
import { TextGenerator } from "./TextGenerator";

export function ThreeDModeler({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A detailed plan for a low-poly medieval sword' or 'A futuristic sci-fi helmet'"
            buttonText="Generate 3D Model Plan"
            generatePrompt={(prompt) => 
                `You are an expert 3D modeling assistant. Create a detailed plan for generating a 3D model based on the user's request. Describe the geometry, textures, lighting, and suggest steps for a human modeler to follow. Do not generate code, only text. Request: "${prompt}"`
            }
            resultTitle="3D Model Plan"
        />
    );
}
