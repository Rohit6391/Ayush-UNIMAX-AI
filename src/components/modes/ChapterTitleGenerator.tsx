"use client";
import { TextGenerator } from "./TextGenerator";

export function ChapterTitleGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'The first chapter of a mystery novel where the detective finds the first clue'"
            buttonText="Generate Chapter Titles"
            generatePrompt={(prompt) => 
                `You are a professional editor. Suggest 5 creative and fitting titles for a chapter with the following summary: "${prompt}"`
            }
            resultTitle="Chapter Title Ideas"
        />
    );
}
