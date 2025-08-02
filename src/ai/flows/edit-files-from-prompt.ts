
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

const EditFilesFromPromptOutputSchema = z.object({
    fileContent: z.string().describe('The full, edited content of the file.'),
});
export type EditFilesFromPromptOutput = z.infer<typeof EditFilesFromPromptOutputSchema>;

export async function editFilesFromPrompt(input: EditFilesFromPromptInput): Promise<EditFilesFromPromptOutput> {
  return editFilesFromPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'editFilesFromPromptPrompt',
  input: {schema: EditFilesFromPromptInputSchema},
  output: {schema: EditFilesFromPromptOutputSchema},
  prompt: `You are a file editor AI. Your task is to edit the given file content based on the user's instruction.

**Instruction**: "{{{prompt}}}"

You MUST respond with a valid JSON object containing the new, fully edited text content of the file in the "fileContent" field. Do not include any other explanation, commentary, or markdown formatting.

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
    const {output} = await prompt(input);
    if (!output) {
        throw new Error("The AI failed to generate a response.");
    }
    return output;
  }
);
