
"use client";
import { TextGenerator } from "./TextGenerator";

export function ProductReviewWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A positive review for a new pair of headphones.'"
            buttonText="Write Product Review"
            generatePrompt={(p: string) => 
                `You are a customer. Write a product review based on the following description. Make it sound authentic and helpful to other buyers. Product: "${p}"`
            }
            resultTitle="Product Review"
        />
    );
}
