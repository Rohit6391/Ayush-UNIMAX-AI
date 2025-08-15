"use client";
import { TextGenerator } from "./TextGenerator";

export function MetaDescriptionWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A blog post about the benefits of yoga'"
            buttonText="Write Description"
            generatePrompt={(prompt) => 
                `You are an SEO copywriter. Write a compelling, SEO-friendly meta description (under 160 characters) for a webpage with the following content. Content: "${prompt}"`
            }
            resultTitle="Generated Meta Description"
        />
    );
}
