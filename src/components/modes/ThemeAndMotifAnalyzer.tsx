"use client";
import { TextGenerator } from "./TextGenerator";

export function ThemeAndMotifAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste a piece of literature, a story summary, or a film description here."
            buttonText="Analyze Themes"
            generatePrompt={(prompt) => 
                `You are a literary critic. Analyze the following text to identify its major themes and recurring motifs. Provide examples from the text to support your analysis. Text: "${prompt}"`
            }
            resultTitle="Theme and Motif Analysis"
        />
    );
}
