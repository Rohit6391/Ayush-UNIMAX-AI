
"use client";
import { TextGenerator } from "./TextGenerator";

export function SalesScriptWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A sales script for selling a subscription to a software service'"
            buttonText="Write Script"
            generatePrompt={(p: string) => 
                `You are a top-performing sales representative. Write a basic sales script for the following product or service. Include an opening, key selling points, and a closing. Product/Service: "${p}"`
            }
            resultTitle="Generated Sales Script"
        />
    );
}
