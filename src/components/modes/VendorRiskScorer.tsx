"use client";
import { TextGenerator } from "./TextGenerator";

export function VendorRiskScorer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a vendor and its services to get a risk score."
            buttonText="Generate Vendor Risk Score"
            generatePrompt={(prompt) => `Score a vendor for risk: "${prompt}"`}
            resultTitle="Generated Vendor Risk Score"
        />
    );
}
