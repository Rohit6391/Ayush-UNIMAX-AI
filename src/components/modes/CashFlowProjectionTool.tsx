"use client";
import { TextGenerator } from "./TextGenerator";

export function CashFlowProjectionTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide your income and expenses to project cash flow."
            buttonText="Generate Cash Flow Projection"
            generatePrompt={(prompt) => `Project cash flow: "${prompt}"`}
            resultTitle="Generated Cash Flow Projection"
        />
    );
}
