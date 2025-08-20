"use client";
import { TextGenerator } from "./TextGenerator";

export function MinimalistDeclutterGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Declutter a messy closet' or 'Tips for a minimalist kitchen'"
            buttonText="Get Decluttering Guide"
            generatePrompt={(p: string) => 
                `You are an expert on minimalism and organization. Suggest a step-by-step guide for decluttering a room or area based on the user's request. Include tips on how to decide what to keep. Request: "${p}"`
            }
            resultTitle="Minimalist Declutter Guide"
        />
    );
}
