"use client";
import { TextGenerator } from "./TextGenerator";

export function ServiceReviewWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A negative review for a restaurant with slow service.'"
            buttonText="Write Service Review"
            generatePrompt={(prompt) => 
                `You are a customer. Write a service review based on the following experience. Be specific and constructive in your feedback. Experience: "${prompt}"`
            }
            resultTitle="Service Review"
        />
    );
}
