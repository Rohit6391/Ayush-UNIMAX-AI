"use client";
import { TextGenerator } from "./TextGenerator";

export function SkillGapForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide industry data to forecast skill gaps."
            buttonText="Generate Skill Gap Forecast"
            generatePrompt={(prompt) => `Forecast skill gaps: "${prompt}"`}
            resultTitle="Generated Skill Gap Forecast"
        />
    );
}
