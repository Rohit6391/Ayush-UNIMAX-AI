"use client";
import { TextGenerator } from "./TextGenerator";

export function BrandVoiceEnforcer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste your text, followed by your brand voice guidelines. e.g., '[Text to check]. Voice: Playful, but not childish. Use emojis.'"
            buttonText="Check Brand Voice"
            generatePrompt={(prompt) => 
                `You are a brand manager. Review the following text and suggest edits to ensure it perfectly aligns with the specified brand voice guidelines. Provide the rewritten text. Text and Guidelines: "${prompt}"`
            }
            resultTitle="Brand Voice Aligned Text"
        />
    );
}
