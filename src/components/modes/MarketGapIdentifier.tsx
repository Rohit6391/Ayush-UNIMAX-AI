"use client";
import { TextGenerator } from "./TextGenerator";

export function MarketGapIdentifier({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a market or industry. e.g., 'The market for food delivery apps.'"
            buttonText="Identify Gaps"
            generatePrompt={(prompt) => 
                `You are a business strategist. Analyze the following market and identify three potential gaps or underserved niches. For each gap, suggest a business concept that could fill it. Market: "${prompt}"`
            }
            resultTitle="Market Gap Analysis"
        />
    );
}
