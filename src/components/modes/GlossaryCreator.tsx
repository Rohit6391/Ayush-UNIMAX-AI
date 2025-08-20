"use client";
import { TextGenerator } from "./TextGenerator";

export function GlossaryCreator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a list of terms to create a glossary."
            buttonText="Create Glossary"
            generatePrompt={(p: string) => `Create a glossary for the terms: "${p}"`}
            resultTitle="Glossary"
        />
    );
}
