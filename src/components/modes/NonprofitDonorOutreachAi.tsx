"use client";
import { TextGenerator } from "./TextGenerator";

export function NonprofitDonorOutreachAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your campaign to draft donor outreach messages."
            buttonText="Generate Donor Outreach Message"
            generatePrompt={(prompt) => `Draft a donor outreach message: "${prompt}"`}
            resultTitle="Generated Donor Outreach Message"
        />
    );
}
