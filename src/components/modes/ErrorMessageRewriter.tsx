
"use client";
import { TextGenerator } from "./TextGenerator";

export function ErrorMessageRewriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Enter an error message to rewrite."
            buttonText="Rewrite Message"
            generatePrompt={(prompt) => `Rewrite the following error message to be more user-friendly: "${prompt}"`}
            resultTitle="Rewritten Error Message"
        />
    );
}

    