"use client";
import { TextGenerator } from "./TextGenerator";

export function TitleOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'My blog post about traveling to Italy' or 'A new productivity app'"
            buttonText="Optimize Title"
            generatePrompt={(prompt) => 
                `You are an expert copywriter and marketing strategist. Generate 5 compelling and SEO-friendly titles or headlines for the following topic or product. Explain briefly why each option is effective. Topic: "${prompt}"`
            }
            resultTitle="Optimized Titles"
        />
    );
}
