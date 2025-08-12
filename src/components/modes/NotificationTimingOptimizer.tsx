"use client";
import { TextGenerator } from "./TextGenerator";

export function NotificationTimingOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your users to optimize notification timing."
            buttonText="Generate Optimized Notifications"
            generatePrompt={(prompt) => `Optimize notification timing: "${prompt}"`}
            resultTitle="Generated Optimized Notifications"
        />
    );
}
