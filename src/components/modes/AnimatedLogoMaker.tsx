"use client";
import { TextGenerator } from "./TextGenerator";

export function AnimatedLogoMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Animate a logo for a tech company' or 'A simple bounce animation for a coffee shop logo'"
            buttonText="Generate Animation Plan"
            generatePrompt={(prompt) => 
                `You are a motion graphics designer. Describe a simple but professional animation for a logo based on the user's request. Outline the keyframes and the type of motion (e.g., fade-in, scale, rotate). Request: "${prompt}"`
            }
            resultTitle="Logo Animation Plan"
        />
    );
}
