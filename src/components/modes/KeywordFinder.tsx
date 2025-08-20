"use client";
import { TextUtilities } from "./TextUtilities";

export function KeywordFinder({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Paste text to find keywords."
            buttonText="Find Keywords"
            generatePrompt={(prompt) => `Identify and list the main keywords from the following text. Text: "${prompt}"`}
            resultTitle="Keywords"
        />
    );
}
