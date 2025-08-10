"use client";
import { TextGenerator } from "./TextGenerator";

export function TechnicalDocumentGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'User manual for a smart coffee machine' or 'API documentation for a weather service'"
            buttonText="Generate Document"
            generatePrompt={(prompt) => 
                `You are an expert technical writer. Create a clear, concise, and comprehensive technical document based on the following request. Use structured formatting like headings, lists, and code blocks where appropriate. Request: "${prompt}"`
            }
            resultTitle="Technical Document"
        />
    );
}
