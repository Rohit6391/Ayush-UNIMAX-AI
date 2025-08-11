"use client";
import { TextGenerator } from "./TextGenerator";

export function DataAnomalyDetector({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste a time-series dataset or a set of values."
            buttonText="Detect Anomalies"
            generatePrompt={(prompt) => 
                `You are a data scientist. Analyze the following dataset to detect any outliers or anomalies. List the anomalous data points and provide a brief explanation for why they might be considered anomalous. Data: "${prompt}"`
            }
            resultTitle="Data Anomalies"
        />
    );
}
