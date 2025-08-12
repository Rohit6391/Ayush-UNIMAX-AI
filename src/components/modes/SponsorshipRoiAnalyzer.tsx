"use client";
import { TextGenerator } from "./TextGenerator";

export function SponsorshipRoiAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide sponsorship data to analyze ROI."
            buttonText="Generate Sponsorship ROI Analysis"
            generatePrompt={(prompt) => `Analyze sponsorship ROI: "${prompt}"`}
            resultTitle="Generated Sponsorship ROI Analysis"
        />
    );
}
