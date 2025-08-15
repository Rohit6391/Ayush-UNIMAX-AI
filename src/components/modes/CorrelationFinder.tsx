
"use client";
import { TextGenerator } from "./TextGenerator";

export function CorrelationFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide data to find correlations."
            buttonText="Find Correlations"
            generatePrompt={(prompt) => `Find correlations in the following data: "${prompt}"`}
            resultTitle="Data Correlations"
        />
    );
}

    