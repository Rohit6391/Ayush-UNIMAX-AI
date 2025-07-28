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
  concept: z.string().describe('The concept for the song.'),
});
export type WriteSongAndMusicInput = z.infer<typeof WriteSongAndMusicInputSchema>;

const WriteSongAndMusicOutputSchema = z.object({
  lyrics: z.string().describe('The lyrics of the song.'),
  composition: z.any().describe('A JSON array of musical events representing the melody.'),
});
export type WriteSongAndMusicOutput = z.infer<typeof WriteSongAndMusicOutputSchema>;

export async function writeSongAndMusic(input: WriteSongAndMusicInput): Promise<WriteSongAndMusicOutput> {
  return writeSongAndMusicFlow(input);
}

const prompt = ai.definePrompt({
  name: 'writeSongAndMusicPrompt',
  input: {schema: WriteSongAndMusicInputSchema},
  output: {schema: WriteSongAndMusicOutputSchema},
  prompt: `You are a songwriter AI. You will generate both the lyrics and a simple melody for a song based on the user's concept.\n\nLyrics Prompt: Write the lyrics for a song about \"{{{concept}}}\". Include verses and a chorus.\n\nMusic Prompt: Generate a simple melody for a song with the following mood and theme: \"{{{concept}}}\". The melody should be an array of 16 musical events. Respond with ONLY a valid JSON array in the format: [{\"note\": \"C4\", \"duration\": \"8n\"}, ...]. Valid notes are C, D, E, F, G, A, B with octaves 3-5. Valid durations are \"4n\", \"8n\", \"16n\".\n\nOutput:\n{
  \"lyrics\": \"...\",
  \"composition\": [{\"note\": \"C4\", \"duration\": \"8n\"}, ...]
}
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
    return output!;
  }
);
