"use client";
import { TextGenerator } from "./TextGenerator";

export function IndustryReportWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'The global electric vehicle market' or 'The future of renewable energy'"
            buttonText="Write Report"
            generatePrompt={(prompt) => 
                `You are a market analyst. Write a brief but insightful report on the current state of the following industry. Include key players, recent trends, and future outlook. Industry: "${prompt}"`
            }
            resultTitle="Industry Report"
        />
    );
}
