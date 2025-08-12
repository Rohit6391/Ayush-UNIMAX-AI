"use client";
import { TextGenerator } from "./TextGenerator";

export function SeoKeywordGapFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide competitor URLs to find keyword gaps."
            buttonText="Generate Keyword Gaps"
            generatePrompt={(prompt) => `Find SEO keyword gaps: "${prompt}"`}
            resultTitle="Generated Keyword Gaps"
        />
    );
}
