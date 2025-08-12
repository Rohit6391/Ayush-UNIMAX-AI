"use client";
import { TextGenerator } from "./TextGenerator";

export function FaqAutoGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a topic to generate FAQs."
            buttonText="Generate Generated FAQs"
            generatePrompt={(prompt) => `Generate FAQs: "${prompt}"`}
            resultTitle="Generated Generated FAQs"
        />
    );
}
