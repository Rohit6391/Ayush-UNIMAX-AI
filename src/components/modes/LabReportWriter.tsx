
"use client";
import { TextGenerator } from "./TextGenerator";

export function LabReportWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A lab report on an experiment about enzyme activity.'"
            buttonText="Write Lab Report"
            generatePrompt={(p: string) => 
                `You are a scientific writer. Write a lab report based on the following experiment. Include sections for Introduction, Methods, Results, and Conclusion. Experiment: "${p}"`
            }
            resultTitle="Lab Report"
        />
    );
}
