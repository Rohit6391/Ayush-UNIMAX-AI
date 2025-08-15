"use client";
import { TextGenerator } from "./TextGenerator";

export function SWOTAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'a small online bookstore' or 'a new social media app'"
            buttonText="Analyze SWOT"
            generatePrompt={(prompt) => 
                `You are a business strategist. Conduct a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) for the following business or project. Business: "${prompt}"`
            }
            resultTitle="SWOT Analysis"
        />
    );
}
