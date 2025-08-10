"use client";
import { TextGenerator } from "./TextGenerator";

export function SeoTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Suggest keywords for a blog post about Italian cooking' or 'Analyze the SEO of the following article...'"
            buttonText="Get SEO Analysis"
            generatePrompt={(prompt) => 
                `You are an SEO expert. Analyze the following request and provide actionable SEO advice. This could include keyword suggestions, content optimization tips, or technical SEO recommendations. Request: "${prompt}"`
            }
            resultTitle="SEO Analysis"
        />
    );
}
