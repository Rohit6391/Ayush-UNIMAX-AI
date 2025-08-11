"use client";
import { TextGenerator } from "./TextGenerator";

export function PredictiveModelTrainer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe the dataset and the variable you want to predict. e.g., 'Predict housing prices based on square footage, number of bedrooms, and location.'"
            buttonText="Train Model"
            generatePrompt={(prompt) => 
                `You are a machine learning engineer. Outline the steps to train a predictive model for the following task. Specify the type of model you would use (e.g., linear regression, random forest), the features to use, and how you would evaluate its performance. Task: "${prompt}"`
            }
            resultTitle="Predictive Model Training Plan"
        />
    );
}
