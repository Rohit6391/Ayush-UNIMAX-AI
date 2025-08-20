"use client";
import { TextGenerator } from "./TextGenerator";

export function PamphletContentWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Content for a pamphlet on dental hygiene.'"
            buttonText="Write Content"
            generatePrompt={(p: string) => 
                `You are a health educator. Write concise and informative content for a pamphlet on the following topic. Topic: "${p}"`
            }
            resultTitle="Pamphlet Content"
        />
    );
}
