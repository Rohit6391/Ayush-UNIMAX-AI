
"use client";
import { TextGenerator } from "./TextGenerator";

export function TroubleshootingChecklist({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Wi-Fi connection issues.' or 'My computer won't turn on.'"
            buttonText="Create Checklist"
            generatePrompt={(p: string) => 
                `You are a technical support specialist. Create a simple troubleshooting checklist with logical steps to diagnose and solve the following common problem. Problem: "${p}"`
            }
            resultTitle="Troubleshooting Checklist"
        />
    );
}
