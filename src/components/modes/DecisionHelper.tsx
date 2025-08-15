"use client";
import { TextGenerator } from "./TextGenerator";

export function DecisionHelper({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Should I take the new job offer or stay at my current company?'"
            buttonText="Help Decide"
            generatePrompt={(prompt) => 
                `You are a logical advisor. Based on the following decision, suggest the best choice by analyzing the potential outcomes and criteria. Decision: "${prompt}"`
            }
            resultTitle="Decision Analysis"
        />
    );
}
