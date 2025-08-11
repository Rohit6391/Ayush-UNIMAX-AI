"use client";
import { TextGenerator } from "./TextGenerator";

export function LabReportFormatter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste your raw lab notes, data, and conclusions here."
            buttonText="Format Report"
            generatePrompt={(prompt) => 
                `You are a teaching assistant. Format the following raw lab notes into a structured lab report with standard sections (Introduction, Materials & Methods, Results, Discussion, Conclusion). Notes: "${prompt}"`
            }
            resultTitle="Formatted Lab Report"
        />
    );
}
