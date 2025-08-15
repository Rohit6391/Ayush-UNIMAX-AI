
"use client";
import { TextGenerator } from "./TextGenerator";

export function NewsSummaryMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste a news article to summarize."
            buttonText="Summarize News"
            generatePrompt={(prompt) => 
                `You are a journalist. Summarize the following news article into a short, objective paragraph. Article: "${prompt}"`
            }
            resultTitle="News Summary"
        />
    );
}
