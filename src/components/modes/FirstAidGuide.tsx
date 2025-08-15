"use client";
import { TextGenerator } from "./TextGenerator";

export function FirstAidGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Basic first aid for a minor burn.' or 'How to treat a bee sting.'"
            buttonText="Get First Aid Guide"
            generatePrompt={(prompt) => 
                `You are a first aid instructor. Provide simple, step-by-step first aid instructions for the following situation. IMPORTANT: Add a disclaimer that this is not a substitute for professional medical help and to call emergency services for serious injuries. Situation: "${prompt}"`
            }
            resultTitle="First Aid Guide"
        />
    );
}
