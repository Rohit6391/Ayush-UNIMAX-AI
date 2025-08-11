"use client";
import { TextGenerator } from "./TextGenerator";

export function KnowledgeGraphBuilder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste text here to extract entities and relationships."
            buttonText="Build Graph"
            generatePrompt={(prompt) => 
                `You are a data scientist. Extract the key entities (people, places, concepts) and their relationships from the following text. Format the output as a list of nodes and edges suitable for a knowledge graph. Text: "${prompt}"`
            }
            resultTitle="Knowledge Graph Data"
        />
    );
}
