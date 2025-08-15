"use client";
import { TextGenerator } from "./TextGenerator";

export function ScamWarningGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Common phishing email scams.' or 'How to spot a fake online store.'"
            buttonText="Get Scam Guide"
            generatePrompt={(prompt) => 
                `You are a cybersecurity expert. Create a simple guide on how to identify and avoid the following type of scam. Include red flags to watch out for. Scam type: "${prompt}"`
            }
            resultTitle="Scam Warning Guide"
        />
    );
}
