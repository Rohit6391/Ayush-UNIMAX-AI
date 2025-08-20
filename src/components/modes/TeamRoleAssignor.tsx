"use client";
import { TextGenerator } from "./TextGenerator";

export function TeamRoleAssignor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="List team members and tasks to assign roles."
            buttonText="Assign Roles"
            generatePrompt={(p: string) => `Assign team roles for the project: "${p}"`}
            resultTitle="Team Roles"
        />
    );
}
