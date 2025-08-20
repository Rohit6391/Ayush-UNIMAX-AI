"use client";
import { TextGenerator } from "./TextGenerator";

export function SolutionProposalWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a problem to propose a solution for."
            buttonText="Write Proposal"
            generatePrompt={(p: string) => `Write a solution proposal for the problem: "${p}"`}
            resultTitle="Solution Proposal"
        />
    );
}
