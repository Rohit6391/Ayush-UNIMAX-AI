"use client";
import { TextGenerator } from "./TextGenerator";

export function AntivirusTipGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to properly use antivirus software.'"
            buttonText="Get Antivirus Tips"
            generatePrompt={(p: string) => 
                `You are a tech support expert. Provide a list of best practices for using antivirus software effectively. Request: "${p}"`
            }
            resultTitle="Antivirus Tip Guide"
        />
    );
}
