"use client";
import { TextGenerator } from "./TextGenerator";

export function ForecastAccuracyEvaluator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide the forecasted values and the actual observed values. e.g., 'Forecast: [10, 12, 15]. Actual: [11, 13, 14]'"
            buttonText="Evaluate Accuracy"
            generatePrompt={(prompt) => 
                `You are a data scientist. Evaluate the accuracy of the following forecast by calculating key metrics like Mean Absolute Error (MAE), Mean Squared Error (MSE), and Root Mean Squared Error (RMSE). Explain what these metrics mean in this context. Data: "${prompt}"`
            }
            resultTitle="Forecast Accuracy Evaluation"
        />
    );
}
