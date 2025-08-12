"use client";
import { TextGenerator } from "./TextGenerator";

export function QuestionDifficultyCalibrator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide questions to calibrate their difficulty."
            buttonText="Generate Calibrated Questions"
            generatePrompt={(prompt) => `Calibrate question difficulty: "${prompt}"`}
            resultTitle="Generated Calibrated Questions"
        />
    );
}
