"use client";
import { TextGenerator } from "./TextGenerator";

export function GraphTheoryVisualizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a graph, e.g., 'A simple graph with 4 nodes (A,B,C,D) and edges (A,B), (B,C), (C,D), (D,A).'"
            buttonText="Visualize Graph"
            generatePrompt={(prompt) => 
                `You are a data visualization expert specializing in graph theory. Create a text-based representation (e.g., using ASCII art or a DOT language description) of the following graph. Graph: "${prompt}"`
            }
            resultTitle="Graph Visualization"
        />
    );
}
