"use client";
import { TextGenerator } from "./TextGenerator";

export function BusinessIdeaGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'for a small town with a large tourist population' or 'related to sustainable technology'"
            buttonText="Generate Ideas"
            generatePrompt={(prompt) => 
                `You are an entrepreneur. Suggest three unique and viable startup ideas based on the following criteria. Criteria: "${prompt}"`
            }
            resultTitle="Business Ideas"
        />
    );
}
