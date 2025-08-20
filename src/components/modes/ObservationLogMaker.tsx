"use client";
import { TextGenerator } from "./TextGenerator";

export function ObservationLogMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'An observation log for a bird watching trip.'"
            buttonText="Make Log"
            generatePrompt={(p: string) => 
                `You are a field researcher. Create a template for an observation log for the following activity. Include fields for date, time, location, and observations. Activity: "${p}"`
            }
            resultTitle="Observation Log"
        />
    );
}
