"use client";
import { TextGenerator } from "./TextGenerator";

export function DatasetIntegrityChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your dataset, including its source and features."
            buttonText="Check Integrity"
            generatePrompt={(prompt) => 
                `You are a data quality analyst. Based on the following dataset description, identify potential integrity issues such as missing values, duplicates, inconsistencies, or formatting errors. Suggest steps to clean and preprocess the data. Dataset: "${prompt}"`
            }
            resultTitle="Dataset Integrity Report"
        />
    );
}
