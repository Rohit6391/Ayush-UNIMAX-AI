"use client";
import { TextGenerator } from "./TextGenerator";

export function CatBehaviorExplainer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Why do cats knead?' or 'My cat keeps knocking things off shelves'"
            buttonText="Explain Behavior"
            generatePrompt={(p: string) => 
                `You are an animal behaviorist specializing in cats. Explain the likely reason for the following cat behavior, including potential motivations and what it means. Behavior: "${p}"`
            }
            resultTitle="Cat Behavior Explained"
        />
    );
}
