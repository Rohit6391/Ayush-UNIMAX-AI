"use client";
import { TextGenerator } from "./TextGenerator";

export function PhishingEmailIdentifier({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste the text of a suspicious email to analyze it."
            buttonText="Identify Phishing Email"
            generatePrompt={(prompt) => 
                `You are a cybersecurity AI. Analyze the following email text for signs of phishing. List any red flags you find and provide a final assessment (e.g., Likely Phishing, Suspicious, Likely Safe). Email text: "${prompt}"`
            }
            resultTitle="Phishing Email Analysis"
        />
    );
}
