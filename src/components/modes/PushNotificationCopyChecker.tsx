"use client";
import { TextGenerator } from "./TextGenerator";

export function PushNotificationCopyChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide push notification copy to check it."
            buttonText="Generate Push Notification Copy"
            generatePrompt={(prompt) => `Check push notification copy: "${prompt}"`}
            resultTitle="Generated Push Notification Copy"
        />
    );
}
