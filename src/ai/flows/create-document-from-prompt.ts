
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
import { CreateDocumentFromPromptInputSchema, CreateDocumentFromPromptOutputSchema } from '@/ai/schemas';


export type CreateDocumentFromPromptInput = z.infer<typeof CreateDocumentFromPromptInputSchema>;
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
        const {output} = await prompt(input, {model: input.model ? googleAI.model(input.model) : undefined});
        if (!output) {
            throw new Error("The AI failed to generate a response.");
        }
        return output;
    } catch (err: any) {
        if (err.message && (err.message.includes('429') || err.message.toLowerCase().includes('quota'))) {
            if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
                 throw new Error("The public quota has been reached. To unlock unlimited use, please add your personal, free Gemini API key to the .env file as instructed in the README.");
            }
            throw new Error("You have exceeded your daily API quota. Please check your plan and billing details, or try again tomorrow.");
        }
        throw new Error(`An unexpected server error occurred: ${err.message}`);
    }
  }
);
