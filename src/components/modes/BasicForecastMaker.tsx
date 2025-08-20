"use client";
import { TextGenerator } from "./TextGenerator";

export function BasicForecastMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide historical data to make a forecast."
            buttonText="Make Forecast"
            generatePrompt={(p: string) => `Create a basic forecast based on: "${p}"`}
            resultTitle="Basic Forecast"
        />
    );
}
