"use client";
import { TextGenerator } from "./TextGenerator";

export function CourseTitleGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'An online course about digital marketing for beginners'"
            buttonText="Generate Course Titles"
            generatePrompt={(prompt) => 
                `You are an instructional designer. Suggest 10 engaging and descriptive titles for an online course with the following topic: "${prompt}"`
            }
            resultTitle="Course Title Ideas"
        />
    );
}
