
"use client";
import { TextGenerator } from "./TextGenerator";

export function HypothesisStatementMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'If students get more sleep, then their grades will improve.'"
            buttonText="Write Hypothesis"
            generatePrompt={(prompt) => 
                `You are a research scientist. Based on the following idea, formulate a clear, testable hypothesis. Idea: "${prompt}"`
            }
            resultTitle="Hypothesis Statement"
        />
    );
}
