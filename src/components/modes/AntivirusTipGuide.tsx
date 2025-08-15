"use client";
import { TextGenerator } from "./TextGenerator";

export function AntivirusTipGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to properly use antivirus software.'"
            buttonText="Get Antivirus Tips"
            generatePrompt={(prompt) => 
                `You are a tech support expert. Provide a list of best practices for using antivirus software effectively. Request: "${prompt}"`
            }
            resultTitle="Antivirus Tip Guide"
        />
    );
}
