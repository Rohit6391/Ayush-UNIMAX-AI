
"use client";
import { TextGenerator } from "./TextGenerator";

export function FlowchartGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a process to generate a flowchart."
            buttonText="Generate Flowchart"
            generatePrompt={(p: string) => `Generate a text-based flowchart for the process: "${p}"`}
            resultTitle="Flowchart"
        />
    );
}
