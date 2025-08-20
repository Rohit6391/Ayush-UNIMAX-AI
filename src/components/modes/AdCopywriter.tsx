"use client";
import { TextGenerator } from "./TextGenerator";

export function AdCopywriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A short ad for a new brand of coffee'"
            buttonText="Write Ad Copy"
            generatePrompt={(p: string) => 
                `You are a professional copywriter. Write a short, punchy ad (around 30 words) for the following product or service. Focus on a clear call to action. Product: "${p}"`
            }
            resultTitle="Generated Ad Copy"
        />
    );
}
