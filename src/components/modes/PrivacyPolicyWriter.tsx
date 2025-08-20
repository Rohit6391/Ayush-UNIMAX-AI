"use client";
import { TextGenerator } from "./TextGenerator";

export function PrivacyPolicyWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A privacy policy for a mobile app that collects user email addresses.'"
            buttonText="Write Privacy Policy"
            generatePrompt={(p: string) => 
                `You are a legal AI assistant. Generate a basic privacy policy template for the following scenario. Include clauses on what data is collected and how it's used. IMPORTANT: Add a clear disclaimer that this is a template and not a substitute for professional legal advice. Scenario: "${p}"`
            }
            resultTitle="Privacy Policy"
        />
    );
}
