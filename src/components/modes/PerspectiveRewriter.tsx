"use client";
import { TextGenerator } from "./TextGenerator";

export function PerspectiveRewriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Rewrite this from first-person to third-person: I walked down the street.'"
            buttonText="Rewrite Perspective"
            generatePrompt={(prompt) => 
                `You are a writing instructor. Rewrite the following text, changing its narrative perspective as requested (e.g., from first-person to third-person). Request: "${prompt}"`
            }
            resultTitle="Rewritten Perspective"
        />
    );
}
