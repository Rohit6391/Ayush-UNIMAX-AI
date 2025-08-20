"use client";
import { TextUtilities } from "./TextUtilities";

export function TestAnswerKeyGenerator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Paste a list of test questions here."
            buttonText="Generate Answer Key"
            generatePrompt={(prompt) => `Create a clear answer key for the following list of test questions. Questions: "${prompt}"`}
            resultTitle="Answer Key"
        />
    );
}
