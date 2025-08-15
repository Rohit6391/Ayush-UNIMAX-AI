"use client";
import { TextGenerator } from "./TextGenerator";

export function ResumeBulletPointMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Managed a team of 5 engineers to launch a new app'"
            buttonText="Generate Points"
            generatePrompt={(prompt) => 
                `You are a professional resume writer. Rewrite the following experience into three professional, action-oriented bullet points suitable for a resume. Use strong action verbs and quantify achievements where possible. Experience: "${prompt}"`
            }
            resultTitle="Resume Bullet Points"
        />
    );
}
