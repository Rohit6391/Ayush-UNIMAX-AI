"use client";
import { TextGenerator } from "./TextGenerator";

export function JobRoleAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Enter a job title or a brief description of a role, e.g., 'Lead Data Scientist at a tech startup'"
            buttonText="Analyze Role"
            generatePrompt={(prompt) => 
                `You are an expert HR analyst and consultant. Analyze the following job role and create a detailed breakdown. Include key responsibilities, required skills (technical and soft), typical qualifications, a likely salary range, and potential career paths. Job Role: "${prompt}"`
            }
            resultTitle="Job Role Analysis"
        />
    );
}
