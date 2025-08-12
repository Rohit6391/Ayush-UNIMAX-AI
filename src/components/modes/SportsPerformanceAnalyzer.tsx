"use client";
import { TextGenerator } from "./TextGenerator";

export function SportsPerformanceAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide sports data to analyze performance."
            buttonText="Generate Performance Analysis"
            generatePrompt={(prompt) => `Analyze sports performance: "${prompt}"`}
            resultTitle="Generated Performance Analysis"
        />
    );
}
