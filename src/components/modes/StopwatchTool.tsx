"use client";
import { TextGenerator } from "./TextGenerator";

export function StopwatchTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Start a stopwatch.'"
            buttonText="Start Stopwatch"
            generatePrompt={(prompt) => 
                `You are a stopwatch tool. Respond by confirming that a stopwatch has started. You cannot create a real stopwatch. Request: "${prompt}"`
            }
            resultTitle="Stopwatch"
        />
    );
}
