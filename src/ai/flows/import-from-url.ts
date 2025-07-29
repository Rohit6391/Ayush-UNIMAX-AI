'use server';

/**
 * @fileOverview An AI agent that imports content from a URL.
 *
 * - importFromUrl - A function that fetches content from a given URL.
 * - ImportFromUrlInput - The input type for the importFromUrl function.
 * - ImportFromUrlOutput - The return type for the importFromUrl function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import fetch from 'node-fetch';

const ImportFromUrlInputSchema = z.object({
  url: z.string().url().describe('The URL to fetch content from.'),
});
export type ImportFromUrlInput = z.infer<typeof ImportFromUrlInputSchema>;

const ImportFromUrlOutputSchema = z.object({
  content: z.string().describe('The fetched content from the URL.'),
});
export type ImportFromUrlOutput = z.infer<typeof ImportFromUrlOutputSchema>;

export async function importFromUrl(input: ImportFromUrlInput): Promise<ImportFromUrlOutput> {
  return importFromUrlFlow(input);
}

const importFromUrlFlow = ai.defineFlow(
  {
    name: 'importFromUrlFlow',
    inputSchema: ImportFromUrlInputSchema,
    outputSchema: ImportFromUrlOutputSchema,
  },
  async (input) => {
    try {
      const response = await fetch(input.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const content = await response.text();
      return { content };
    } catch (error: any) {
      console.error('Failed to fetch from URL:', error);
      throw new Error(`Could not fetch content from the URL. Reason: ${error.message}`);
    }
  }
);
