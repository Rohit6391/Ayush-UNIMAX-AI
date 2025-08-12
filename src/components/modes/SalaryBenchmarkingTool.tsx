"use client";
import { TextGenerator } from "./TextGenerator";

export function SalaryBenchmarkingTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a job role to benchmark the salary."
            buttonText="Generate Salary Benchmark"
            generatePrompt={(prompt) => `Benchmark a salary: "${prompt}"`}
            resultTitle="Generated Salary Benchmark"
        />
    );
}
