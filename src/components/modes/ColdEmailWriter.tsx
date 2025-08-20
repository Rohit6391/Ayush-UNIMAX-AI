
"use client";
import { TextGenerator } from "./TextGenerator";

export function ColdEmailWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A cold email to a potential client offering web design services'"
            buttonText="Write Cold Email"
            generatePrompt={(p: string) => 
                `You are a sales expert. Write a concise, professional, and effective cold email for the following purpose. The email should be personalized and have a clear call to action. Purpose: "${p}"`
            }
            resultTitle="Generated Cold Email"
        />
    );
}
