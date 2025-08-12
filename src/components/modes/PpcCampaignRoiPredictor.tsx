"use client";
import { TextGenerator } from "./TextGenerator";

export function PpcCampaignRoiPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a PPC campaign to predict its ROI."
            buttonText="Generate PPC ROI"
            generatePrompt={(prompt) => `Predict PPC campaign ROI: "${prompt}"`}
            resultTitle="Generated PPC ROI"
        />
    );
}
