"use client";
import { TextGenerator } from "./TextGenerator";

export function EducationSyllabusPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a course to plan its syllabus."
            buttonText="Generate Syllabus"
            generatePrompt={(prompt) => `Plan a syllabus: "${prompt}"`}
            resultTitle="Generated Syllabus"
        />
    );
}
