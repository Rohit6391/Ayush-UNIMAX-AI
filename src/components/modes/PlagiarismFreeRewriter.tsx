"use client";
import { TextGenerator } from "./TextGenerator";

export function PlagiarismFreeRewriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste text here to rewrite it for originality..."
            buttonText="Rewrite Text"
            generatePrompt={(prompt) => 
                `You are an expert writer. Rewrite the following text to be completely unique and pass plagiarism checks, while preserving the original meaning. Text: "${prompt}"`
            }
            resultTitle="Rewritten Text"
        />
    );
}
