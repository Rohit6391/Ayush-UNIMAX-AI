"use client";
import { TextUtilities } from "./TextUtilities";

export function EmailSubjectLineMaker({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Describe the email content."
            buttonText="Make Subject Line"
            generatePrompt={(prompt) => `Suggest 3 subject lines for an email about: "${prompt}"`}
            resultTitle="Email Subject Lines"
        />
    );
}
