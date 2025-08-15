"use client";
import { TextGenerator } from "./TextGenerator";

export function ZeroWasteTips({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Easy ways to reduce plastic use in the kitchen'"
            buttonText="Get Zero Waste Tips"
            generatePrompt={(p: string) => `You are a sustainability expert. Provide three practical tips for reducing waste based on the user's request. Request: "${p}"`}
            resultTitle="Zero Waste Tips"
        />
    );
}
