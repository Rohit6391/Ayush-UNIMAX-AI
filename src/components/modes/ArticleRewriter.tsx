"use client";
import { TextGenerator } from "./TextGenerator";

export function ArticleRewriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste a short article or paragraph to rephrase."
            buttonText="Rewrite Article"
            generatePrompt={(prompt) => 
                `You are an expert content creator. Rephrase the following article to make it unique, while preserving the original information and key points. Article: "${prompt}"`
            }
            resultTitle="Rewritten Article"
        />
    );
}
