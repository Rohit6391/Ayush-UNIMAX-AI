
'use server';

/**
 * @fileOverview An AI agent that generates sound by speaking the prompt text.
 *
 * - generateSound - A function that handles the sound generation process.
 * - GenerateSoundInput - The input type for the generateSound function.
 * - GenerateSoundOutput - The return type for the generateSound function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { textToSpeech } from './text-to-speech';

const GenerateSoundInputSchema = z.object({
  prompt: z.string().describe('The text to be spoken to generate the sound.'),
});
export type GenerateSoundInput = z.infer<typeof GenerateSoundInputSchema>;

const GenerateSoundOutputSchema = z.object({
  audioDataUri: z.string().describe('The generated audio as a data URI.'),
});
export type GenerateSoundOutput = z.infer<typeof GenerateSoundOutputSchema>;

export async function generateSound(
  input: GenerateSoundInput
): Promise<GenerateSoundOutput> {
  return generateSoundFlow(input);
}


const generateSoundFlow = ai.defineFlow(
  {
    name: 'generateSoundFlow',
    inputSchema: GenerateSoundInputSchema,
    outputSchema: GenerateSoundOutputSchema,
  },
  async (input) => {
    // This flow now directly uses the text-to-speech functionality.
    const { audioDataUri } = await textToSpeech({ text: input.prompt });
    
    if (!audioDataUri) {
        throw new Error('Failed to generate audio for the prompt.');
    }

    return {
        audioDataUri,
    };
  }
);
