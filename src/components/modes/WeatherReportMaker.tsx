
"use client";
import { TextGenerator } from "./TextGenerator";

export function WeatherReportMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'The weather forecast for New York City tomorrow.'"
            buttonText="Make Report"
            generatePrompt={(prompt) => 
                `You are a meteorologist. Write a short weather report based on the following query. Include temperature, conditions, and wind. Query: "${prompt}"`
            }
            resultTitle="Weather Report"
        />
    );
}
