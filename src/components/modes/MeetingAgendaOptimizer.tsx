"use client";
import { TextGenerator } from "./TextGenerator";

export function MeetingAgendaOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a meeting agenda to optimize it."
            buttonText="Generate Optimized Agenda"
            generatePrompt={(prompt) => `Optimize a meeting agenda: "${prompt}"`}
            resultTitle="Generated Optimized Agenda"
        />
    );
}
