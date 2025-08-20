"use client";
import { TextGenerator } from "./TextGenerator";

export function NonprofitMissionStatementMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A nonprofit dedicated to providing clean water in developing countries.'"
            buttonText="Write Mission Statement"
            generatePrompt={(p: string) => 
                `You are a nonprofit consultant. Write a clear, concise, and inspiring mission statement for a nonprofit with the following purpose. Purpose: "${p}"`
            }
            resultTitle="Nonprofit Mission Statement"
        />
    );
}
