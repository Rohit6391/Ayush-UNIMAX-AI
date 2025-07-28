'use server';

/**
 * @fileOverview A document creation AI agent.
 *
 * - createDocumentFromPrompt - A function that handles the document creation process.
 * - CreateDocumentFromPromptInput - The input type for the createDocumentFromPrompt function.
 * - CreateDocumentFromPromptOutput - The return type for the createDocumentFromPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CreateDocumentFromPromptInputSchema = z.object({
  prompt: z.string().describe('The prompt for generating the document.'),
});
export type CreateDocumentFromPromptInput = z.infer<typeof CreateDocumentFromPromptInputSchema>;

const CreateDocumentFromPromptOutputSchema = z.object({
  document: z.string().describe('The generated document.'),
});
export type CreateDocumentFromPromptOutput = z.infer<typeof CreateDocumentFromPromptOutputSchema>;

export async function createDocumentFromPrompt(input: CreateDocumentFromPromptInput): Promise<CreateDocumentFromPromptOutput> {
  return createDocumentFromPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'createDocumentFromPromptPrompt',
  input: {schema: CreateDocumentFromPromptInputSchema},
  output: {schema: CreateDocumentFromPromptOutputSchema},
  prompt: `You are an expert at creating documents based on user prompts.

  Create a document based on the following prompt:
  {{prompt}}`,
});

const createDocumentFromPromptFlow = ai.defineFlow(
  {
    name: 'createDocumentFromPromptFlow',
    inputSchema: CreateDocumentFromPromptInputSchema,
    outputSchema: CreateDocumentFromPromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
