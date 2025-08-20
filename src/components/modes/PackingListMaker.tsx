
"use client";
import { TextGenerator } from "./TextGenerator";

export function PackingListMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A weekend beach trip' or 'A 10-day hiking trip in the mountains'"
            buttonText="Make Packing List"
            generatePrompt={(prompt) => 
                `You are an expert travel planner. Create a comprehensive packing list based on the following trip description. Organize the list into categories like 'Clothing', 'Toiletries', 'Documents', and 'Miscellaneous'. Trip: "${prompt}"`
            }
            resultTitle="Packing List"
        />
    );
}
