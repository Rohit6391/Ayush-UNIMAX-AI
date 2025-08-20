"use client";
import { TextUtilities } from "./TextUtilities";

export function AcronymMaker({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Enter a phrase to create an acronym from."
            buttonText="Make Acronym"
            generatePrompt={(prompt) => `Create an acronym for the phrase: "${prompt}"`}
            resultTitle="Acronym"
        />
    );
}
