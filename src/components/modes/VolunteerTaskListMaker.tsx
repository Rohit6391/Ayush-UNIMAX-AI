"use client";
import { TextGenerator } from "./TextGenerator";

export function VolunteerTaskListMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Tasks for volunteers at a community clean-up event.'"
            buttonText="Make Task List"
            generatePrompt={(prompt) => 
                `You are a volunteer coordinator. Create a clear and organized list of tasks for volunteers at the following event. Event: "${prompt}"`
            }
            resultTitle="Volunteer Task List"
        />
    );
}
