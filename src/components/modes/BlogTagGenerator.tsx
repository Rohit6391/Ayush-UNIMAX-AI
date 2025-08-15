"use client";
import { TextGenerator } from "./TextGenerator";

export function BlogTagGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A blog post about travel in Southeast Asia'"
            buttonText="Generate Tags"
            generatePrompt={(prompt) => 
                `You are an SEO specialist. Suggest 10 relevant and effective tags for a blog post on the following topic. Topic: "${prompt}"`
            }
            resultTitle="Suggested Blog Tags"
        />
    );
}
