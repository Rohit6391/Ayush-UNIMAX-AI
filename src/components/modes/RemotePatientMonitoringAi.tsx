"use client";
import { TextGenerator } from "./TextGenerator";

export function RemotePatientMonitoringAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide patient data to monitor remotely."
            buttonText="Generate Patient Monitoring"
            generatePrompt={(prompt) => `Monitor a patient remotely: "${prompt}"`}
            resultTitle="Generated Patient Monitoring"
        />
    );
}
