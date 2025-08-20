
"use client";
import { TextGenerator } from "./TextGenerator";

export function SecondHandShoppingTips({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Tips for finding good clothes at a thrift store'"
            buttonText="Get Shopping Tips"
            generatePrompt={(p: string) => `You are an expert thrift shopper. Provide three helpful tips for successful second-hand shopping based on the user's request. Request: "${p}"`}
            resultTitle="Second-Hand Shopping Tips"
        />
    );
}
