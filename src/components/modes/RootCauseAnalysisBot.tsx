"use client";
import { TextGenerator } from "./TextGenerator";

export function RootCauseAnalysisBot({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a problem or failure. e.g., 'Our website crashed for an hour yesterday.'"
            buttonText="Analyze Root Cause"
            generatePrompt={(prompt) => 
                `You are a systems analyst. Perform a root cause analysis for the following problem using the '5 Whys' technique. Work backward from the problem to identify the most likely underlying cause. Problem: "${prompt}"`
            }
            resultTitle="Root Cause Analysis"
        />
    );
}
