"use client";
import { TextGenerator } from "./TextGenerator";

export function ScientificHypothesisSuggestor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide an area of scientific interest or an observed phenomenon. e.g., 'The rapid decline of bee populations.'"
            buttonText="Suggest Hypothesis"
            generatePrompt={(prompt) => 
                `You are an experienced research scientist. Based on the following area of interest, suggest three novel, testable hypotheses. For each hypothesis, briefly outline a potential experimental approach. Topic: "${prompt}"`
            }
            resultTitle="Scientific Hypotheses"
        />
    );
}
