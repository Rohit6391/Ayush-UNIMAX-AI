
"use client";
import { TextGenerator } from "./TextGenerator";

export function RefundPolicyWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 30-day refund policy for digital products.'"
            buttonText="Write Refund Policy"
            generatePrompt={(p: string) => 
                `You are a business consultant. Draft a clear and simple refund policy based on the user's request. Include the conditions for a refund and the process for requesting one. IMPORTANT: Add a disclaimer that this is a template. Request: "${p}"`
            }
            resultTitle="Refund Policy"
        />
    );
}
