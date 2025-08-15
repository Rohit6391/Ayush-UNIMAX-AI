"use client";
import { TextGenerator } from "./TextGenerator";

export function ProductDescriptionWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A new wireless headphone with noise-cancelling features'"
            buttonText="Write Description"
            generatePrompt={(prompt) => 
                `You are a professional copywriter. Write a compelling and persuasive sales description for the following product. Highlight its key features and benefits. Product: "${prompt}"`
            }
            resultTitle="Product Description"
        />
    );
}
