'use server';

/**
 * @fileOverview A file editor AI agent.
 *
 * - editFilesFromPrompt - A function that handles the prompt to edit files.
 * - EditFilesFromPromptInput - The input type for the editFilesFromPrompt function.
 * - EditFilesFromPromptOutput - The return type for the editFilesFromPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EditFilesFromPromptInputSchema = z.object({
  fileContent: z.string().describe('The content of the file to be edited.'),
  prompt: z.string().describe('Instructions on how to edit the file content.'),
});
export type EditFilesFromPromptInput = z.infer<typeof EditFilesFromPromptInputSchema>;

const EditFilesFromPromptOutputSchema = z.string().describe('The edited content of the file.');
export type EditFilesFromPromptOutput = z.infer<typeof EditFilesFromPromptOutputSchema>;

export async function editFilesFromPrompt(input: EditFilesFromPromptInput): Promise<EditFilesFromPromptOutput> {
  return editFilesFromPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'editFilesFromPromptPrompt',
  input: {schema: EditFilesFromPromptInputSchema},
  output: {schema: EditFilesFromPromptOutputSchema},
  prompt: `Edit the following file content based on the provided instruction.

Instruction: "{{{prompt}}}"

Your response must be ONLY the new, fully edited text content of the file. Do not include any explanation, commentary, or markdown formatting.

--- FILE CONTENT ---
{{{fileContent}}}`,
});

const editFilesFromPromptFlow = ai.defineFlow(
  {
    name: 'editFilesFromPromptFlow',
    inputSchema: EditFilesFromPromptInputSchema,
    outputSchema: EditFilesFromPromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input, { model: 'googleai/gemini-2.5-pro-latest'});
    return output!;
  }
);
