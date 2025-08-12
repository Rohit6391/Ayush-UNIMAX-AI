"use client";
import { TextGenerator } from "./TextGenerator";

export function ColorPaletteForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide data to forecast color palette trends."
            buttonText="Generate Color Palette Forecast"
            generatePrompt={(prompt) => `Forecast color palettes: "${prompt}"`}
            resultTitle="Generated Color Palette Forecast"
        />
    );
}
