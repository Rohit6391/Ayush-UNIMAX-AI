"use client";
import { TextGenerator } from "./TextGenerator";

export function DesignAssistant({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'What are some good color palettes for a luxury brand?' or 'Critique the UI of my travel app screenshot.'"
            buttonText="Get Design Advice"
            generatePrompt={(prompt) => 
                `You are an expert UI/UX and brand designer. Provide detailed, actionable advice on the following design query. If an image is provided, analyze it as part of your response. Query: "${prompt}"`
            }
            resultTitle="Design Advice"
        />
    );
}
