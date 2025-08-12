"use client";
import { TextGenerator } from "./TextGenerator";

export function EventSponsorshipRoiCalculator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide sponsorship data to calculate the ROI."
            buttonText="Generate Sponsorship ROI"
            generatePrompt={(prompt) => `Calculate event sponsorship ROI: "${prompt}"`}
            resultTitle="Generated Sponsorship ROI"
        />
    );
}
