
"use client";
import { TextGenerator } from "./TextGenerator";

export function TrendFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide data to find trends."
            buttonText="Find Trends"
            generatePrompt={(p: string) => `Find trends in the following data: "${p}"`}
            resultTitle="Data Trends"
        />
    );
}
