
"use client";
import { TextGenerator } from "./TextGenerator";

export function FactVerificationTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Verify the claim that humans only use 10% of their brains.'"
            buttonText="Verify Fact"
            generatePrompt={(p: string) => 
                `You are a research assistant. Verify the following statement by checking reliable sources. Provide a determination (True, False, Misleading) and cite a source if possible. Statement: "${p}"`
            }
            resultTitle="Fact Verification"
        />
    );
}
