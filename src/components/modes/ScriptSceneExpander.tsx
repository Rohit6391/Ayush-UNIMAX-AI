"use client";
import { TextGenerator } from "./TextGenerator";

export function ScriptSceneExpander({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a brief scene description, e.g., 'A detective interrogates a nervous witness in a dark room.'"
            buttonText="Expand Scene"
            generatePrompt={(prompt) => 
                `You are a professional screenwriter. Expand the following brief scene description into a full script scene, including character dialogue, actions, and parentheticals. Use standard screenplay format. Scene: "${prompt}"`
            }
            resultTitle="Expanded Script Scene"
        />
    );
}
