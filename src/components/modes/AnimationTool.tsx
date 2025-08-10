"use client";
import { TextGenerator } from "./TextGenerator";

export function AnimationTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 15-second explainer video for a new mobile app' or 'A character walk cycle for a cartoon fox'"
            buttonText="Generate Animation Plan"
            generatePrompt={(prompt) => 
                `You are an expert animator and motion graphics artist. Create a detailed storyboard and plan for an animation based on the user's request. Break it down into scenes, describing the action, timing, and visual style. Request: "${prompt}"`
            }
            resultTitle="Animation Plan"
        />
    );
}
