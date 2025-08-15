"use client";
import { TextGenerator } from "./TextGenerator";

export function CameraSettingGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Camera settings for a portrait with a blurry background' or 'Settings for night sky photography'"
            buttonText="Get Settings"
            generatePrompt={(prompt) => 
                `You are a professional photographer. Suggest the ideal camera settings (Aperture, Shutter Speed, ISO) for the following scenario. Explain why these settings are appropriate. Scenario: "${prompt}"`
            }
            resultTitle="Camera Setting Suggestions"
        />
    );
}
