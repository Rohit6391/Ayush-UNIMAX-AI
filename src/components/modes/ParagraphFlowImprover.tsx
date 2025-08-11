"use client";
import { TextGenerator } from "./TextGenerator";

export function ParagraphFlowImprover({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste a paragraph here to improve its flow and coherence."
            buttonText="Improve Flow"
            generatePrompt={(prompt) => 
                `You are an experienced writing coach. Reorder the sentences and add transition words to the following paragraph to improve its logical flow, coherence, and readability, without changing the core meaning. Paragraph: "${prompt}"`
            }
            resultTitle="Improved Paragraph"
        />
    );
}
