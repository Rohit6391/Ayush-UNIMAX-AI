
"use client";
import { TextGenerator } from "./TextGenerator";

export function SEOKeywordSuggestor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Keywords for a website selling handmade jewelry'"
            buttonText="Suggest Keywords"
            generatePrompt={(p: string) => 
                `You are an SEO expert. Suggest a list of 10 primary and long-tail keywords for a business or webpage with the following description. Description: "${p}"`
            }
            resultTitle="SEO Keyword Suggestions"
        />
    );
}
