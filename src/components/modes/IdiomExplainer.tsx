"use client";
import { TextGenerator } from "./TextGenerator";

export function IdiomExplainer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Bite the bullet' or 'Break a leg'"
            buttonText="Explain Idiom"
            generatePrompt={(prompt) => 
                `You are a linguist. Explain the meaning and origin of the following idiom. Idiom: "${prompt}"`
            }
            resultTitle="Idiom Explanation"
        />
    );
}
