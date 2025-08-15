
"use client";
import { TextGenerator } from "./TextGenerator";

export function MedicalTermExplainer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'What is hypertension?'"
            buttonText="Explain Term"
            generatePrompt={(prompt) => 
                `You are a medical professional. Explain the following medical term in simple, easy-to-understand language. Term: "${prompt}"`
            }
            resultTitle="Medical Term Explanation"
        />
    );
}
