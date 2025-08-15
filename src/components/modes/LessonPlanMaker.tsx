"use client";
import { TextGenerator } from "./TextGenerator";

export function LessonPlanMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 45-minute lesson plan for teaching photosynthesis to middle schoolers'"
            buttonText="Create Lesson Plan"
            generatePrompt={(prompt) => 
                `You are an experienced teacher. Create a detailed lesson plan based on the following request. Include learning objectives, materials, activities, and assessment methods. Request: "${prompt}"`
            }
            resultTitle="Lesson Plan"
        />
    );
}
