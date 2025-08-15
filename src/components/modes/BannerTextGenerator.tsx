
"use client";
import { TextGenerator } from "./TextGenerator";

export function BannerTextGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Banner text for a grand opening sale.'"
            buttonText="Generate Banner Text"
            generatePrompt={(prompt) => 
                `You are a marketing writer. Create a short, impactful headline for a banner based on the following event. Event: "${prompt}"`
            }
            resultTitle="Banner Text"
        />
    );
}
