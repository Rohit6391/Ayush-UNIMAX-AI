"use client";
import { TextGenerator } from "./TextGenerator";

export function DataQualityScoreGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a dataset and its key attributes..."
            buttonText="Generate Score"
            generatePrompt={(prompt) => 
                `You are a data quality expert. Based on the following dataset description, provide a data quality score (out of 100) and a breakdown of how you arrived at that score, considering factors like completeness, consistency, accuracy, and timeliness. Dataset: "${prompt}"`
            }
            resultTitle="Data Quality Score"
        />
    );
}
