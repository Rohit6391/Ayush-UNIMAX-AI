
"use client";
import { TextGenerator } from "./TextGenerator";

export function BookReviewWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A review for the book 'Dune' by Frank Herbert.'"
            buttonText="Write Book Review"
            generatePrompt={(p: string) => 
                `You are a literary critic. Write a thoughtful and balanced review for the following book. Discuss the plot, characters, writing style, and overall themes. Book: "${p}"`
            }
            resultTitle="Book Review"
        />
    );
}
