"use client";
import { TextGenerator } from "./TextGenerator";

export function DogTrainingTipGiver({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to teach a dog to sit' or 'Stop my puppy from biting'"
            buttonText="Get Training Tips"
            generatePrompt={(prompt) => 
                `You are a professional dog trainer. Provide three simple, effective tips for the following dog training challenge. Challenge: "${prompt}"`
            }
            resultTitle="Dog Training Tips"
        />
    );
}
