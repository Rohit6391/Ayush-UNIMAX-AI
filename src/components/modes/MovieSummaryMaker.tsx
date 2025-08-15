
"use client";
import { TextGenerator } from "./TextGenerator";

export function MovieSummaryMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Enter the title of a movie."
            buttonText="Summarize Movie"
            generatePrompt={(prompt) => 
                `You are a film critic. Provide a concise summary of the following movie's plot, including the main characters and the central conflict. Movie: "${prompt}"`
            }
            resultTitle="Movie Summary"
        />
    );
}

    