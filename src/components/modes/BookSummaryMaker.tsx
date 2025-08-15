
"use client";
import { TextGenerator } from "./TextGenerator";

export function BookSummaryMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Enter the title and author of a book, or paste a summary of its plot."
            buttonText="Summarize Book"
            generatePrompt={(prompt) => 
                `You are a literary analyst. Provide a concise summary of the following book. Include the main plot points, key characters, and major themes. Book: "${prompt}"`
            }
            resultTitle="Book Summary"
        />
    );
}

    