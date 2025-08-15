"use client";
import { TextGenerator } from "./TextGenerator";

export function CoverLetterWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'for a software engineer position at Google' or 'for a marketing internship at a startup'"
            buttonText="Write Cover Letter"
            generatePrompt={(prompt) => 
                `You are a professional career advisor. Write a compelling and professional cover letter for the following job application. The letter should be tailored to the role and company. Application: "${prompt}"`
            }
            resultTitle="Cover Letter"
        />
    );
}
