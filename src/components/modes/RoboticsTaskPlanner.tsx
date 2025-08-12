"use client";
import { TextGenerator } from "./TextGenerator";

export function RoboticsTaskPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a robotic system and goal to plan its tasks."
            buttonText="Generate Robotics Task Plan"
            generatePrompt={(prompt) => `Plan robotics tasks: "${prompt}"`}
            resultTitle="Generated Robotics Task Plan"
        />
    );
}
