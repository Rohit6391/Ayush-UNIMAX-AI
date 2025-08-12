"use client";
import { TextGenerator } from "./TextGenerator";

export function GrantProposalGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your project to generate a grant proposal."
            buttonText="Generate Grant Proposal"
            generatePrompt={(prompt) => `Generate a grant proposal: "${prompt}"`}
            resultTitle="Generated Grant Proposal"
        />
    );
}
