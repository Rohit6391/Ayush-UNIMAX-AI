"use client";
import { TextGenerator } from "./TextGenerator";

export function NewsHeadlineGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A story about a local hero saving a cat from a tree.'"
            buttonText="Generate Headlines"
            generatePrompt={(p: string) => 
                `You are a news editor. Suggest five catchy and accurate headlines for a news story on the following topic. Topic: "${p}"`
            }
            resultTitle="News Headlines"
        />
    );
}
