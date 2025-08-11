"use client";
import { TextGenerator } from "./TextGenerator";

export function MethodologyDraftingTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your experiment or research plan. e.g., 'A survey of 500 people to measure consumer sentiment...'"
            buttonText="Draft Methodology"
            generatePrompt={(prompt) => 
                `You are a research scientist. Based on the following experimental plan, write a detailed 'Methodology' section for a research paper. Be specific about the procedures, materials, and data analysis techniques. Plan: "${prompt}"`
            }
            resultTitle="Methodology Draft"
        />
    );
}
