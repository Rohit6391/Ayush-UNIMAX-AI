"use client";
import { TextGenerator } from "./TextGenerator";

export function HeartRateZoneCalculator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Age: 30, Resting Heart Rate: 65 bpm'"
            buttonText="Calculate Zones"
            generatePrompt={(prompt) => 
                `You are a fitness expert. Calculate the target heart rate zones (e.g., Fat Burn, Cardio, Peak) using the Karvonen formula based on the user's age and resting heart rate. IMPORTANT: Include a disclaimer that this is an estimate and not a substitute for professional medical advice. Details: "${prompt}"`
            }
            resultTitle="Heart Rate Zones"
        />
    );
}
