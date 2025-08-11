
'use server';
/**
 * @fileOverview AI agent to generate songs with lyrics and music.
 *
 * - writeSongAndMusic - A function that generates a song given a concept.
 * - WriteSongAndMusicInput - The input type for the writeSongAndMusic function.
 * - WriteSongAndMusicOutput - The return type for the writeSongAndMusic function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WriteSongAndMusicInputSchema = z.object({
  concept: z.string().describe('The concept for the song, which may include a specific language.'),
});
export type WriteSongAndMusicInput = z.infer<typeof WriteSongAndMusicInputSchema>;

const WriteSongAndMusicOutputSchema = z.object({
  lyrics: z.string().describe('The lyrics of the song.'),
  composition: z.array(z.object({note: z.string(), duration: z.string()})).describe('A JSON array of musical events representing the melody.'),
});
export type WriteSongAndMusicOutput = z.infer<typeof WriteSongAndMusicOutputSchema>;

export async function writeSongAndMusic(input: WriteSongAndMusicInput): Promise<WriteSongAndMusicOutput> {
  return writeSongAndMusicFlow(input);
}

const prompt = ai.definePrompt({
  name: 'writeSongAndMusicPrompt',
  input: {schema: WriteSongAndMusicInputSchema},
  output: {schema: WriteSongAndMusicOutputSchema},
  prompt: `You are an expert songwriter AI. Your task is to generate both lyrics and a simple melody for a song based on the user's concept.

Concept: "{{{concept}}}"

Instructions:
1.  **Lyrics**: Write creative lyrics for a song about the provided concept. If the user specifies a language in their concept, you MUST write the lyrics in that language. Otherwise, default to English.
2.  **Melody**: Generate a simple melody that matches the mood and theme of the concept. The melody must be an array of exactly 16 musical events.
3.  **Output Format**: You must respond with ONLY a valid JSON object containing the 'lyrics' and 'composition'.

Example format for the 'composition' array:
[{"note": "C4", "duration": "8n"}, {"note": "E4", "duration": "4n"}, ...]

Valid notes are C, D, E, F, G, A, B with octaves from 3 to 5.
Valid durations are "4n" (quarter note), "8n" (eighth note), "16n" (sixteenth note).
`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const writeSongAndMusicFlow = ai.defineFlow(
  {
    name: 'writeSongAndMusicFlow',
    inputSchema: WriteSongAndMusicInputSchema,
    outputSchema: WriteSongAndMusicOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error("The AI failed to generate a song.");
    }
    return output;
  }
);
