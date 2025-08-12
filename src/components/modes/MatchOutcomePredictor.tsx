"use client";
import { TextGenerator } from "./TextGenerator";

export function MatchOutcomePredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide match data to predict the outcome."
            buttonText="Generate Match Outcome Prediction"
            generatePrompt={(prompt) => `Predict a match outcome: "${prompt}"`}
            resultTitle="Generated Match Outcome Prediction"
        />
    );
}
