
'use server';
/**
 * @fileOverview AI agent to generate songs with lyrics and music. This is an offline simulation.
 *
 * - writeSongAndMusic - A function that generates a song given a concept.
 * - WriteSongAndMusicInput - The input type for the writeSongAndMusic function.
 * - WriteSongAndMusicOutput - The return type for the writeSongAndMusic function.
 */

import {z} from 'genkit';
import { ModelId, availableModels } from '@/lib/models';

const WriteSongAndMusicInputSchema = z.object({
  concept: z.string().describe('The concept for the song, which may include a specific language.'),
  model: z.enum(availableModels).optional().describe('The model to use for generation.'),
});
export type WriteSongAndMusicInput = z.infer<typeof WriteSongAndMusicInputSchema>;

const WriteSongAndMusicOutputSchema = z.object({
  lyrics: z.string().describe('The lyrics of the song.'),
  composition: z.array(z.object({note: z.string(), duration: z.string()})).describe('A JSON array of musical events representing the melody.'),
});
export type WriteSongAndMusicOutput = z.infer<typeof WriteSongAndMusicOutputSchema>;

export async function writeSongAndMusic(input: WriteSongAndMusicInput): Promise<WriteSongAndMusicOutput> {
    await new Promise(resolve => setTimeout(resolve, 200));

    const lyrics = `(Verse 1)
In this offline world, we're building a dream,
Based on your prompt, a creative theme.
With local logic and data stored deep,
While the online giants are all fast asleep.

(Chorus)
No API key, no call to the cloud,
Just pure simulation, singing out loud.
The quota is endless, the service is free,
A powerful AI, just for you and me.
`;

    const composition = [
      { note: 'C4', duration: '4n' },
      { note: 'E4', duration: '4n' },
      { note: 'G4', duration: '4n' },
      { note: 'C5', duration: '4n' },
      { note: 'A4', duration: '4n' },
      { note: 'F4', duration: '4n' },
      { note: 'E4', duration: '4n' },
      { note: 'D4', duration: '2n' },
      { note: 'C4', duration: '4n' },
      { note: 'G4', duration: '4n' },
      { note: 'F4', duration: '4n' },
      { note: 'E4', duration: '4n' },
      { note: 'D4', duration: '4n' },
      { note: 'C4', duration: '2n' },
      { note: 'G3', duration: '4n' },
      { note: 'C4', duration: '4n' },
    ];

    return {
        lyrics,
        composition,
    };
}
