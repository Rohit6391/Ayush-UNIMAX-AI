"use client";
import { TextGenerator } from "./TextGenerator";

export function PlagiarismFreeRewriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste text here to rewrite it for originality..."
            buttonText="Rewrite Text"
            generatePrompt={(p: string) => 
                `You are an expert writer. Rewrite the following text to be completely unique and pass plagiarism checks, while preserving the original meaning. Text: "${p}"`
            }
            resultTitle="Rewritten Text"
        />
    );
}
