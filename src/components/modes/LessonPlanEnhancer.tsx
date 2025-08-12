"use client";
import { TextGenerator } from "./TextGenerator";

export function LessonPlanEnhancer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a lesson plan to enhance it."
            buttonText="Generate Enhanced Lesson Plan"
            generatePrompt={(prompt) => `Enhance a lesson plan: "${prompt}"`}
            resultTitle="Generated Enhanced Lesson Plan"
        />
    );
}
