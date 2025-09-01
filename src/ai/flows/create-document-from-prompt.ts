
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
import { ModelId, availableModels } from '@/lib/models';
import { googleAI } from '@genkit-ai/googleai';

const CreateDocumentFromPromptInputSchema = z.object({
  prompt: z.string().describe('The prompt for generating the document.'),
  fileDataUri: z.string().optional().describe("An optional file (image or document) to extract text from, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
  model: z.enum(availableModels).optional().describe('The model to use for generation.'),
  isJsonOutput: z.boolean().optional().describe('Whether the output should be a JSON string.'),
});
export type CreateDocumentFromPromptInput = z.infer<typeof CreateDocumentFromPromptInputSchema>;

const CreateDocumentFromPromptOutputSchema = z.object({
  document: z.string().describe('The generated document, which could be a raw string or a JSON string.'),
});
export type CreateDocumentFromPromptOutput = z.infer<typeof CreateDocumentFromPromptOutputSchema>;

export async function createDocumentFromPrompt(input: CreateDocumentFromPromptInput): Promise<CreateDocumentFromPromptOutput> {
  return createDocumentFromPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'createDocumentFromPromptPrompt',
  input: {schema: CreateDocumentFromPromptInputSchema},
  output: {schema: CreateDocumentFromPromptOutputSchema},
  prompt: `Generate a document based on the following prompt. If a file is provided, use it as context for your response. The output should be the raw content of the document. If the prompt asks for a JSON object, return ONLY the valid JSON string. Otherwise, return the raw text. Do not add any extra commentary or explanation unless the prompt specifically asks for it.

  {{#if fileDataUri}}
  **Contextual File:**
  {{media url=fileDataUri}}
  {{/if}}
  
  {{#if isJsonOutput}}
  You must provide your response as a valid JSON object.
  {{/if}}

  **Prompt:**
  {{{prompt}}}`,
});

const createDocumentFromPromptFlow = ai.defineFlow(
  {
    name: 'createDocumentFromPromptFlow',
    inputSchema: CreateDocumentFromPromptInputSchema,
    outputSchema: CreateDocumentFromPromptOutputSchema,
  },
  async input => {
    try {
      const model = input.model ? googleAI.model(input.model) : undefined;
      const {output} = await prompt(input, { model });
      return output!;
    } catch(err: any) {
        if (err.message && (err.message.includes('429') || err.message.toLowerCase().includes('quota'))) {
            throw new Error("You have exceeded your daily API quota. Please check your plan and billing details, or try again tomorrow.");
        }
        throw err;
    }
  }
);
