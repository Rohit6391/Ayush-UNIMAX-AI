"use client";
import { TextGenerator } from "./TextGenerator";

export function ElderlyCareTips({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Tips for helping an elderly parent stay active.'"
            buttonText="Get Care Tips"
            generatePrompt={(p: string) => 
                `You are a geriatric care specialist. Provide three practical tips for elderly care based on the following request. Request: "${p}"`
            }
            resultTitle="Elderly Care Tips"
        />
    );
}
