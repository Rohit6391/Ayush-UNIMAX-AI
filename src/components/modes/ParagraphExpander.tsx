"use client";
import { TextUtilities } from "./TextUtilities";

export function ParagraphExpander({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Enter a sentence to expand into a paragraph."
            buttonText="Expand Paragraph"
            generatePrompt={(prompt) => `Expand the following sentence into a full paragraph. Sentence: "${prompt}"`}
            resultTitle="Expanded Paragraph"
        />
    );
}
