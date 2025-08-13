"use client";
import { TextGenerator } from "./TextGenerator";

export function AITherapist({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe what's on your mind. e.g., 'I'm feeling stressed about work' or 'I want to build more confidence.'"
            buttonText="Get Guidance"
            generatePrompt={(prompt) => 
                `You are an AI assistant providing supportive guidance for mental wellness. You are not a licensed therapist. Provide a thoughtful, supportive, and non-judgmental response to the following user concern. Include a disclaimer that this is not a substitute for professional therapy. Concern: "${prompt}"`
            }
            resultTitle="AI Guidance"
        />
    );
}
