"use client";
import { TextGenerator } from "./TextGenerator";

export function AnimatedInfographicMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'An animated infographic about the water cycle' or 'A chart showing market growth over 5 years'"
            buttonText="Generate Infographic Plan"
            generatePrompt={(prompt) => 
                `You are a motion graphics designer. Create a detailed plan and script for an animated infographic based on the user's topic. Describe the visual elements, text, and animation sequence for each scene. Topic: "${prompt}"`
            }
            resultTitle="Animated Infographic Plan"
        />
    );
}
