"use client";
import { TextUtilities } from "./TextUtilities";

export function WebinarOutlineMaker({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'A webinar on effective social media marketing for small businesses'"
            buttonText="Make Webinar Outline"
            generatePrompt={(prompt) => `Create a structured outline for a webinar on the following topic. Include sections for introduction, main points, and Q&A. Topic: "${prompt}"`}
            resultTitle="Webinar Outline"
        />
    );
}
