"use client";
import { TextGenerator } from "./TextGenerator";

export function AdBannerMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 50% off summer sale for a clothing brand.'"
            buttonText="Generate Banner Copy"
            generatePrompt={(prompt) => 
                `You are a marketing copywriter. Write several compelling, short text options for an ad banner based on the following promotion. Include a headline, a brief body, and a call-to-action. Promotion: "${prompt}"`
            }
            resultTitle="Ad Banner Copy"
        />
    );
}
