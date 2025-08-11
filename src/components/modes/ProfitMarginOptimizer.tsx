"use client";
import { TextGenerator } from "./TextGenerator";

export function ProfitMarginOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a product, its cost, and its current selling price."
            buttonText="Optimize Margin"
            generatePrompt={(prompt) => 
                `You are a business consultant. Analyze the following product's cost and price, and suggest three strategies to optimize its profit margin. Consider cost-cutting, pricing strategies, and value-add opportunities. Product Info: "${prompt}"`
            }
            resultTitle="Profit Margin Optimization"
        />
    );
}
