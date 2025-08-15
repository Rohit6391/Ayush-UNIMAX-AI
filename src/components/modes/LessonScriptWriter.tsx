
"use client";
import { TextUtilities } from "./TextUtilities";

export function LessonScriptWriter({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'A 5-minute lesson script on the water cycle for kids'"
            buttonText="Write Lesson Script"
            generatePrompt={(prompt) => `Write a clear and engaging educational lesson script for the following topic. Include narrator lines and visual cues. Topic: "${prompt}"`}
            resultTitle="Lesson Script"
        />
    );
}
