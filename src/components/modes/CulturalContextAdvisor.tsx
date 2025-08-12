"use client";
import { TextGenerator } from "./TextGenerator";

export function CulturalContextAdvisor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Ask about cultural context for a language."
            buttonText="Generate Cultural Context"
            generatePrompt={(prompt) => `Get cultural context: "${prompt}"`}
            resultTitle="Generated Cultural Context"
        />
    );
}
