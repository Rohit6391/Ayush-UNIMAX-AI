"use client";
import { TextGenerator } from "./TextGenerator";

export function PasswordSafetyTips({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Best practices for creating strong passwords.'"
            buttonText="Get Password Tips"
            generatePrompt={(prompt) => 
                `You are a cybersecurity specialist. Provide a list of 5 essential tips for creating and managing secure passwords. Request: "${prompt}"`
            }
            resultTitle="Password Safety Tips"
        />
    );
}
