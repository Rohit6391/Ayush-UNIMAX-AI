"use client";
import { TextGenerator } from "./TextGenerator";

export function FeatureImportanceAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your predictive model and its features. e.g., 'A model predicting customer churn with features like age, monthly bill, and contract type.'"
            buttonText="Analyze Features"
            generatePrompt={(prompt) => 
                `You are a machine learning specialist. For the given predictive model, rank the features by their likely importance in influencing the model's predictions. Provide a brief justification for your ranking. Model: "${prompt}"`
            }
            resultTitle="Feature Importance Analysis"
        />
    );
}
