"use client";
import { TextGenerator } from "./TextGenerator";

export function SkillListGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'for a graphic designer' or 'for a project manager'"
            buttonText="Generate Skills"
            generatePrompt={(prompt) => 
                `You are a career coach. Create a list of 10 essential skills (both technical and soft skills) for the following job role. Role: "${prompt}"`
            }
            resultTitle="Essential Skills"
        />
    );
}
