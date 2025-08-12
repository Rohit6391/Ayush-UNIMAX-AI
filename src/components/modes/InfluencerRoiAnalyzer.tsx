"use client";
import { TextGenerator } from "./TextGenerator";

export function InfluencerRoiAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide influencer data to analyze the ROI."
            buttonText="Generate Influencer ROI"
            generatePrompt={(prompt) => `Analyze influencer ROI: "${prompt}"`}
            resultTitle="Generated Influencer ROI"
        />
    );
}
