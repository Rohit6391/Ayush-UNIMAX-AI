"use client";
import { TextGenerator } from "./TextGenerator";

export function PriceElasticityEstimator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a product and its market. e.g., 'A cup of coffee from a premium cafe.'"
            buttonText="Estimate Elasticity"
            generatePrompt={(prompt) => 
                `You are an economist. Estimate the likely price elasticity of demand for the following product. Explain your reasoning, considering factors like availability of substitutes, necessity vs. luxury, and brand loyalty. Product: "${prompt}"`
            }
            resultTitle="Price Elasticity Estimate"
        />
    );
}
