
"use client";

import { TextGenerator } from "./TextGenerator";

export function CodeAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste your code here to get an analysis..."
            buttonText="Analyze Code"
            generatePrompt={(prompt) => 
                `Analyze the following code snippet and provide a report on its correctness, performance, style, and best practices. Identify any potential bugs or areas for improvement. Code:\n\n${prompt}`
            }
            resultTitle="Code Analysis"
        />
    );
}
