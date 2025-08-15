"use client";
import { TextGenerator } from "./TextGenerator";

export function DigitalNomadTips({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to find reliable Wi-Fi while traveling' or 'Best countries for digital nomads'"
            buttonText="Get Nomad Tips"
            generatePrompt={(p: string) => `You are an experienced digital nomad. Provide three practical tips for working remotely while traveling, based on the user's request. Request: "${p}"`}
            resultTitle="Digital Nomad Tips"
        />
    );
}
