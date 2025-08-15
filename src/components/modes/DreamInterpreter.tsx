"use client";
import { TextGenerator } from "./TextGenerator";

export function DreamInterpreter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your dream in as much detail as possible..."
            buttonText="Interpret Dream"
            generatePrompt={(p: string) => `Provide a thoughtful and psychological interpretation of the following dream, considering common symbols and themes. The interpretation should be in the same language as the dream description. Dream: ${p}`}
            resultTitle="Dream Interpretation"
        />
    );
}
