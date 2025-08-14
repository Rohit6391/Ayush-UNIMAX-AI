"use client";
import { TextGenerator } from "./TextGenerator";

export function GrammarPracticeCreator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Practice exercises for French subjunctive' or 'Drills for using the past perfect tense in English'"
            buttonText="Create Grammar Practice"
            generatePrompt={(prompt) => 
                `You are a language teacher. Create a set of 5 grammar practice exercises based on the following topic. Include a mix of fill-in-the-blank, sentence correction, and translation tasks. Provide an answer key at the end. Topic: "${prompt}"`
            }
            resultTitle="Grammar Practice"
        />
    );
}
