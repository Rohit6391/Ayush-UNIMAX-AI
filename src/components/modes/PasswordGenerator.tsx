"use client";
import { TextGenerator } from "./TextGenerator";

export function PasswordGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Generate a secure 16-character password with numbers and symbols.'"
            buttonText="Generate Password"
            generatePrompt={(prompt) => 
                `You are a password generator. Create a secure, random password based on the following criteria. Criteria: "${prompt}"`
            }
            resultTitle="Generated Password"
        />
    );
}
