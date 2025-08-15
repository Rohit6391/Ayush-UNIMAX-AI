"use client";
import { TextGenerator } from "./TextGenerator";

export function WifiNameGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Suggest funny Wi-Fi names.'"
            buttonText="Generate Wi-Fi Names"
            generatePrompt={(prompt) => 
                `You are a Wi-Fi name generator. Suggest 5 clever and funny Wi-Fi SSIDs. Request: "${prompt}"`
            }
            resultTitle="Wi-Fi Name Suggestions"
        />
    );
}
