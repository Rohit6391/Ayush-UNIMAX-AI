"use client";
import { TextGenerator } from "./TextGenerator";

export function AnimatedGIFEditor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Create a plan to add text overlay to a GIF' or 'How to loop a GIF seamlessly'"
            buttonText="Get GIF Editing Plan"
            generatePrompt={(prompt) => 
                `You are a professional media editor. Provide a step-by-step plan for editing an animated GIF based on the user's request. Include suggested tools and techniques. Request: "${prompt}"`
            }
            resultTitle="GIF Editing Plan"
        />
    );
}
