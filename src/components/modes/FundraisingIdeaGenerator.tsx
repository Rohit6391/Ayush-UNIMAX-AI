"use client";
import { TextGenerator } from "./TextGenerator";

export function FundraisingIdeaGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Fundraising ideas for a school sports team.'"
            buttonText="Generate Fundraising Ideas"
            generatePrompt={(p: string) => 
                `You are a fundraising expert. Suggest three creative and effective fundraising ideas for the following cause or group. Cause/Group: "${p}"`
            }
            resultTitle="Fundraising Ideas"
        />
    );
}
