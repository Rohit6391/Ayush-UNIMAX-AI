"use client";
import { TextGenerator } from "./TextGenerator";

export function PayrollComplianceChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide payroll data to check for compliance."
            buttonText="Generate Payroll Compliance Check"
            generatePrompt={(prompt) => `Check payroll compliance: "${prompt}"`}
            resultTitle="Generated Payroll Compliance Check"
        />
    );
}
