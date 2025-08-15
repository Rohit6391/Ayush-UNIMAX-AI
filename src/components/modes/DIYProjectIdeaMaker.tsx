
"use client";
import { TextGenerator } from "./TextGenerator";

export function DIYProjectIdeaMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Easy DIY projects for a small apartment balcony.'"
            buttonText="Get Ideas"
            generatePrompt={(prompt) => 
                `You are a crafting expert. Suggest three creative and simple DIY project ideas based on the user's request. For each idea, list the basic materials needed. Request: "${prompt}"`
            }
            resultTitle="DIY Project Ideas"
        />
    );
}

    