
"use client";
import { TextGenerator } from "./TextGenerator";

export function GlossaryCreator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a list of terms to create a glossary."
            buttonText="Create Glossary"
            generatePrompt={(prompt) => `Create a glossary for the terms: "${prompt}"`}
            resultTitle="Glossary"
        />
    );
}

    