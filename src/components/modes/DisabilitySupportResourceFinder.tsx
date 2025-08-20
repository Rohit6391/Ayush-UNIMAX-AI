
"use client";
import { TextGenerator } from "./TextGenerator";

export function DisabilitySupportResourceFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Resources for finding accessible housing.'"
            buttonText="Find Resources"
            generatePrompt={(p: string) => 
                `You are a disability support advocate. Suggest three types of resources or organizations that could help with the following issue. Provide a brief description of what each resource offers. Do not provide real names or contact information. Issue: "${p}"`
            }
            resultTitle="Disability Support Resources"
        />
    );
}
