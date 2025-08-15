"use client";
import { TextGenerator } from "./TextGenerator";

export function AdHeadlineCreator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'for a 50% off sale on summer clothing'"
            buttonText="Create Headlines"
            generatePrompt={(prompt) => 
                `You are an advertising expert. Create five short, attention-grabbing ad headlines for the following promotion. Promotion: "${prompt}"`
            }
            resultTitle="Ad Headlines"
        />
    );
}
