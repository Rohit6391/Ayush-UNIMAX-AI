"use client";
import { TextGenerator } from "./TextGenerator";

export function TextComplexityAdjuster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste the text here, and specify the target audience or reading level. e.g., 'Simplify this for a 5th grader' or 'Make this sound more academic'"
            buttonText="Adjust Complexity"
            generatePrompt={(prompt) => 
                `You are an expert editor. Rewrite the following text to the specified reading level or for the target audience. Retain the core meaning while adjusting vocabulary and sentence structure. Text and target: "${prompt}"`
            }
            resultTitle="Adjusted Text"
        />
    );
}
