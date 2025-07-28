'use server';

/**
 * @fileOverview An AI agent that translates text from one language to another.
 *
 * - translateText - A function that translates the input text.
 * - TranslateTextAIInput - The input type for the translateText function.
 * - TranslateTextAIOutput - The return type for the translateText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateTextAIInputSchema = z.object({
  text: z.string().describe('The text to translate.'),
  language: z.string().describe('The target language for the translation.'),
});
export type TranslateTextAIInput = z.infer<typeof TranslateTextAIInputSchema>;

const TranslateTextAIOutputSchema = z.object({
  translation: z.string().describe('The translated text.'),
});
export type TranslateTextAIOutput = z.infer<typeof TranslateTextAIOutputSchema>;

export async function translateText(input: TranslateTextAIInput): Promise<TranslateTextAIOutput> {
  return translateTextAIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'translateTextAIPrompt',
  input: {schema: TranslateTextAIInputSchema},
  output: {schema: TranslateTextAIOutputSchema},
  prompt: `Translate the following text to {{language}}. Return only the translated text.

{{{text}}}`,
});

const translateTextAIFlow = ai.defineFlow(
  {
    name: 'translateTextAIFlow',
    inputSchema: TranslateTextAIInputSchema,
    outputSchema: TranslateTextAIOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
