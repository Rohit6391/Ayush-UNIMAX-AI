"use client";
import { TextGenerator } from "./TextGenerator";

export function ExperimentDesignPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="State your hypothesis. e.g., 'Hypothesis: Increased CO2 levels will accelerate plant growth.'"
            buttonText="Plan Experiment"
            generatePrompt={(prompt) => 
                `You are a lab manager. Design a detailed experimental plan to test the following hypothesis. Include the variables (independent, dependent, controlled), materials, procedure, and data collection methods. Hypothesis: "${prompt}"`
            }
            resultTitle="Experiment Design Plan"
        />
    );
}
