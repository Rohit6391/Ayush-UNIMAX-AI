
'use server';

/**
 * @fileOverview An AI agent that finds lyrics from a song URL.
 *
 * - findLyricsFromUrl - A function that takes a URL and returns the song lyrics.
 * - FindLyricsFromUrlInput - The input type for the function.
 * - FindLyricsFromUrlOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { importFromUrl } from './import-from-url';

const FindLyricsFromUrlInputSchema = z.object({
  url: z.string().url({ message: "Invalid URL provided." }).describe('The URL of the song page (e.g., from Genius, AZLyrics).'),
});
export type FindLyricsFromUrlInput = z.infer<typeof FindLyricsFromUrlInputSchema>;

const FindLyricsFromUrlOutputSchema = z.object({
  lyrics: z.string().describe('The full lyrics of the song found on the page.'),
});
export type FindLyricsFromUrlOutput = z.infer<typeof FindLyricsFromUrlOutputSchema>;


const lyricsExtractorPrompt = ai.definePrompt({
    name: 'lyricsExtractorPrompt',
    input: { schema: z.object({ pageContent: z.string() }) },
    output: { schema: FindLyricsFromUrlOutputSchema },
    prompt: `You are an expert at extracting song lyrics from webpage HTML content. 
    
    **Instructions:**
    1.  Analyze the provided HTML content.
    2.  Identify the main block of text that represents the song's lyrics.
    3.  Extract ONLY the lyrics. Remove all other text, HTML tags, ads, and annotations (like [Verse 1], [Chorus], etc. are okay to keep if they are part of the lyrics).
    4.  If no lyrics can be found, return an empty string for the 'lyrics' field.
    
    **HTML Content:**
    {{{pageContent}}}
    `,
});


export async function findLyricsFromUrl(
  input: FindLyricsFromUrlInput
): Promise<FindLyricsFromUrlOutput> {
  return findLyricsFromUrlFlow(input);
}

const findLyricsFromUrlFlow = ai.defineFlow(
  {
    name: 'findLyricsFromUrlFlow',
    inputSchema: FindLyricsFromUrlInputSchema,
    outputSchema: FindLyricsFromUrlOutputSchema,
  },
  async (input) => {
    // Step 1: Fetch the HTML content from the URL
    const { content } = await importFromUrl({ url: input.url });

    if (!content) {
        throw new Error("Could not retrieve any content from the provided URL.");
    }
    
    // Step 2: Use the fetched HTML to extract the lyrics
    const { output } = await lyricsExtractorPrompt({ pageContent: content });

    if (!output || !output.lyrics) {
        throw new Error("The AI failed to find lyrics on the provided page.");
    }

    return output;
  }
);
