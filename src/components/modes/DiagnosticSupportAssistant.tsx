"use client";
import { TextGenerator } from "./TextGenerator";

export function DiagnosticSupportAssistant({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a case to get diagnostic support."
            buttonText="Generate Diagnostic Support"
            generatePrompt={(prompt) => `Get diagnostic support: "${prompt}"`}
            resultTitle="Generated Diagnostic Support"
        />
    );
}
