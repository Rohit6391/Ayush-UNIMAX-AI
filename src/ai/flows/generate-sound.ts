'use server';
/**
 * @fileOverview AI agent to generate sound compositions.
 *
 * - generateSound - A function that generates a sound composition given a concept.
 * - GenerateSoundInput - The input type for the generateSound function.
 * - GenerateSoundOutput - The return type for the generateSound function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSoundInputSchema = z.object({
  prompt: z.string().describe('The prompt for the sound effect or melody.'),
});
export type GenerateSoundInput = z.infer<typeof GenerateSoundInputSchema>;

const GenerateSoundOutputSchema = z.object({
  composition: z.array(z.object({note: z.string(), duration: z.string()})).describe('A JSON array of musical events representing the sound.'),
});
export type GenerateSoundOutput = z.infer<typeof GenerateSoundOutputSchema>;

export async function generateSound(input: GenerateSoundInput): Promise<GenerateSoundOutput> {
  return generateSoundFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSoundPrompt',
  input: {schema: GenerateSoundInputSchema},
  output: {schema: GenerateSoundOutputSchema},
  prompt: `You are a sound design AI. Your task is to generate a simple melody or sound effect based on the user's prompt.

Prompt: "{{{prompt}}}"

Instructions:
1.  **Melody**: Generate a simple melody or sound effect that matches the prompt. The melody must be an array of 8 to 16 musical events.
2.  **Output Format**: You must respond with ONLY a valid JSON object containing the 'composition'.

Example format for the 'composition' array:
[{"note": "C4", "duration": "8n"}, {"note": "E4", "duration": "4n"}, ...]

Valid notes are C, D, E, F, G, A, B with octaves from 3 to 5.
Valid durations are "4n" (quarter note), "8n" (eighth note), "16n" (sixteenth note).
`,
});

const generateSoundFlow = ai.defineFlow(
  {
    name: 'generateSoundFlow',
    inputSchema: GenerateSoundInputSchema,
    outputSchema: GenerateSoundOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
