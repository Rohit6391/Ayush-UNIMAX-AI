"use client";
import { TextGenerator } from "./TextGenerator";

export function JournalAbstractCreator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste the main body of your research paper here."
            buttonText="Create Abstract"
            generatePrompt={(prompt) => 
                `You are an academic editor. Write a formal, structured abstract (Background, Methods, Results, Conclusion) for the following research paper. The abstract should be concise and accurately reflect the paper's content. Paper: "${prompt}"`
            }
            resultTitle="Journal Abstract"
        />
    );
}
