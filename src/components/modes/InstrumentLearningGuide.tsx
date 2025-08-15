"use client";
import { TextGenerator } from "./TextGenerator";

export function InstrumentLearningGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Tips for a beginner learning guitar' or 'How to hold a violin properly'"
            buttonText="Get Guide"
            generatePrompt={(prompt) => 
                `You are a music teacher. Provide three fundamental tips for a beginner learning the specified instrument or concept. Request: "${prompt}"`
            }
            resultTitle="Instrument Learning Guide"
        />
    );
}
