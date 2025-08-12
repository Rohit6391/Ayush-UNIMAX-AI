"use client";
import { TextGenerator } from "./TextGenerator";

export function AcademicProgressForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide student data to forecast academic progress."
            buttonText="Generate Academic Progress Forecast"
            generatePrompt={(prompt) => `Forecast academic progress: "${prompt}"`}
            resultTitle="Generated Academic Progress Forecast"
        />
    );
}
