"use client";
import { TextGenerator } from "./TextGenerator";

export function ContractSimplifier({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste a complex legal clause or section of a contract here..."
            buttonText="Simplify Contract"
            generatePrompt={(prompt) => 
                `You are a legal communication expert. Rewrite the following complex legal text into plain, easy-to-understand language without losing its core legal meaning. IMPORTANT: Include a disclaimer that this is a simplification and not a substitute for legal advice. Legal Text: "${prompt}"`
            }
            resultTitle="Simplified Contract Text"
        />
    );
}
