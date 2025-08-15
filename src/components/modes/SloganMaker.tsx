"use client";
import { TextGenerator } from "./TextGenerator";

export function SloganMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'for a fast food restaurant' or 'for a new fitness app'"
            buttonText="Make Slogan"
            generatePrompt={(prompt) => 
                `You are a marketing copywriter. Create three short and impactful marketing slogans for the following product or business. Description: "${prompt}"`
            }
            resultTitle="Marketing Slogans"
        />
    );
}
