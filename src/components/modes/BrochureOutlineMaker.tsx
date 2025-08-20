"use client";
import { TextGenerator } from "./TextGenerator";

export function BrochureOutlineMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'An outline for a travel agency brochure.'"
            buttonText="Make Outline"
            generatePrompt={(p: string) => 
                `You are a content strategist. Create a simple outline for a brochure on the following topic. Include sections for a front panel, inside panels, and back panel. Topic: "${p}"`
            }
            resultTitle="Brochure Outline"
        />
    );
}
