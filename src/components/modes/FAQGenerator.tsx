
"use client";
import { TextGenerator } from "./TextGenerator";

export function FAQGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Enter a topic to generate FAQs for."
            buttonText="Generate FAQs"
            generatePrompt={(p: string) => `Generate a list of frequently asked questions for the topic: "${p}"`}
            resultTitle="FAQs"
        />
    );
}
