"use client";
import { TextGenerator } from "./TextGenerator";

export function VocabularyBuilder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Advanced vocabulary for business writing'"
            buttonText="Build Vocabulary"
            generatePrompt={(prompt) => 
                `You are a lexicographer. Provide a list of 10 useful vocabulary words related to the following topic. For each word, include its definition and an example sentence. Topic: "${prompt}"`
            }
            resultTitle="Vocabulary List"
        />
    );
}
