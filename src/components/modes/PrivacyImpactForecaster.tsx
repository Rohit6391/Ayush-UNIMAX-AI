"use client";
import { TextGenerator } from "./TextGenerator";

export function PrivacyImpactForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a new product or feature that handles user data."
            buttonText="Forecast Impact"
            generatePrompt={(prompt) => 
                `You are a privacy consultant. Conduct a privacy impact assessment for the following product. Identify the types of data collected, potential privacy risks to users, and recommend measures to protect user privacy. Product: "${prompt}"`
            }
            resultTitle="Privacy Impact Forecast"
        />
    );
}
