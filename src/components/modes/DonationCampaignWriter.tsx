
"use client";
import { TextGenerator } from "./TextGenerator";

export function DonationCampaignWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A donation appeal for a wildlife conservation project.'"
            buttonText="Write Campaign Appeal"
            generatePrompt={(p: string) => 
                `You are a professional fundraiser. Write a short, persuasive donation appeal for the following cause. The appeal should be emotional and have a clear call to action. Cause: "${p}"`
            }
            resultTitle="Donation Campaign Appeal"
        />
    );
}
