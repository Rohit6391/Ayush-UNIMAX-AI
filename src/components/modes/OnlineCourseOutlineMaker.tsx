"use client";
import { TextUtilities } from "./TextUtilities";

export function OnlineCourseOutlineMaker({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'An outline for a beginner's course on digital photography'"
            buttonText="Make Course Outline"
            generatePrompt={(prompt) => `Create a structured outline for an online course on the following topic. Break it down into modules and lessons. Topic: "${prompt}"`}
            resultTitle="Online Course Outline"
        />
    );
}
