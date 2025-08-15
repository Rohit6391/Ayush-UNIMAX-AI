"use client";
import { TextGenerator } from "./TextGenerator";

export function BrandNameGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A tech company specializing in AI' or 'a cozy bookstore'"
            buttonText="Generate Names"
            generatePrompt={(prompt) => 
                `You are a branding specialist. Suggest five unique and creative brand names for a company with the following description. Description: "${prompt}"`
            }
            resultTitle="Brand Names"
        />
    );
}
