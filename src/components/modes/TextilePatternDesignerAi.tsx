"use client";
import { TextGenerator } from "./TextGenerator";

export function TextilePatternDesignerAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a theme to design a textile pattern."
            buttonText="Generate Textile Pattern Design"
            generatePrompt={(prompt) => `Design a textile pattern: "${prompt}"`}
            resultTitle="Generated Textile Pattern Design"
        />
    );
}
