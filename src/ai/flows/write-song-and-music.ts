
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
import { ModelId, availableModels } from '@/lib/models';
import { googleAI } from '@genkit-ai/googleai';
import { importFromUrl } from './import-from-url';

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
  return writeSongAndMusicFlow(input);
}

const writeSongPrompt = ai.definePrompt({
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
    const {output} = await writeSongPrompt(input, {model: input.model ? googleAI.model(input.model) : undefined});
    return output!;
  }
);


// New flow and types for finding lyrics from a URL

const FindLyricsInputSchema = z.object({
    songUrl: z.string().url().describe('The URL of the song to find lyrics for.'),
});
export type FindLyricsInput = z.infer<typeof FindLyricsInputSchema>;

const FindLyricsOutputSchema = z.object({
    lyrics: z.string().describe('The found lyrics of the song.'),
});
export type FindLyricsOutput = z.infer<typeof FindLyricsOutputSchema>;

const findLyricsPrompt = ai.definePrompt({
    name: 'findLyricsPrompt',
    input: { schema: z.object({ pageContent: z.string() }) },
    output: { schema: FindLyricsOutputSchema },
    prompt: `You are an expert at finding song lyrics from web page content. Analyze the following text content extracted from a web page and return only the lyrics of the song. Ignore all other text, comments, and metadata.

Page Content:
{{{pageContent}}}
`,
});

const findLyricsFromUrlFlow = ai.defineFlow(
    {
        name: 'findLyricsFromUrlFlow',
        inputSchema: FindLyricsInputSchema,
        outputSchema: FindLyricsOutputSchema,
    },
    async (input) => {
        // 1. Import the content from the URL
        const { content } = await importFromUrl({ url: input.songUrl });
        
        // 2. Use an AI prompt to extract the lyrics from the page content
        const { output } = await findLyricsPrompt({ pageContent: content });
        
        if (!output || !output.lyrics) {
            throw new Error('Could not find lyrics on the provided page.');
        }

        return output;
    }
);

export async function findLyricsFromUrl(input: FindLyricsInput): Promise<FindLyricsOutput> {
  return findLyricsFromUrlFlow(input);
}
