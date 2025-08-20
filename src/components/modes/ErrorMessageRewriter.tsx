"use client";
import { TextGenerator } from "./TextGenerator";

export function ErrorMessageRewriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Enter an error message to rewrite."
            buttonText="Rewrite Message"
            generatePrompt={(p: string) => `Rewrite the following error message to be more user-friendly: "${p}"`}
            resultTitle="Rewritten Error Message"
        />
    );
}
