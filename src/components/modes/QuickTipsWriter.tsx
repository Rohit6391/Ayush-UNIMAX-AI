"use client";
import { TextGenerator } from "./TextGenerator";

export function QuickTipsWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Enter a topic to get quick tips for."
            buttonText="Write Tips"
            generatePrompt={(p: string) => `Write some quick tips for: "${p}"`}
            resultTitle="Quick Tips"
        />
    );
}
