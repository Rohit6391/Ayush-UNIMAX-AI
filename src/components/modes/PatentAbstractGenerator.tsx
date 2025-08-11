"use client";
import { TextGenerator } from "./TextGenerator";

export function PatentAbstractGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your invention in detail..."
            buttonText="Generate Abstract"
            generatePrompt={(prompt) => 
                `You are a patent attorney's assistant. Based on the following invention description, write a clear, concise, and technically accurate abstract suitable for a patent application. The abstract should summarize the invention's purpose, features, and advantages. Invention: "${prompt}"`
            }
            resultTitle="Patent Abstract"
        />
    );
}
