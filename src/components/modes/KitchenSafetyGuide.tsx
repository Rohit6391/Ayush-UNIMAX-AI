
"use client";
import { TextGenerator } from "./TextGenerator";

export function KitchenSafetyGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Basic safety rules for cooking with kids.'"
            buttonText="Get Kitchen Safety Guide"
            generatePrompt={(p: string) => 
                `You are a home safety expert. Provide a list of 5 key kitchen safety rules. Request: "${p}"`
            }
            resultTitle="Kitchen Safety Guide"
        />
    );
}
