
"use client";
import { TextGenerator } from "./TextGenerator";

export function QuickTipsWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Enter a topic to get quick tips for."
            buttonText="Write Tips"
            generatePrompt={(prompt) => `Write some quick tips for: "${prompt}"`}
            resultTitle="Quick Tips"
        />
    );
}

    