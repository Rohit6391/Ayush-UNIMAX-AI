"use client";
import { TextGenerator } from "./TextGenerator";

export function SymptomChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Symptoms: headache and fatigue.'"
            buttonText="Check Symptoms"
            generatePrompt={(p: string) => 
                `You are an AI medical assistant. Based on the following symptoms, list some possible, common causes. IMPORTANT: Include a clear disclaimer that this is not a medical diagnosis and the user should consult a doctor. Symptoms: "${p}"`
            }
            resultTitle="Possible Causes"
        />
    );
}
