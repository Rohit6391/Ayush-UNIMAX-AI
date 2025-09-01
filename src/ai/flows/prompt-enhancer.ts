
'use server';

/**
 * @fileOverview An AI agent that enhances a user's prompt to be more effective.
 *
 * - enhancePrompt - A function that handles the prompt enhancement.
 * - EnhancePromptInput - The input type for the function.
 * - EnhancePromptOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { ModelId, availableModels } from '@/lib/models';
import { googleAI } from '@genkit-ai/googleai';

const EnhancePromptInputSchema = z.object({
  prompt: z.string().describe('The user-written prompt to be enhanced.'),
  model: z.enum(availableModels).optional().describe('The model to use for generation.'),
});
export type EnhancePromptInput = z.infer<typeof EnhancePromptInputSchema>;

const EnhancePromptOutputSchema = z.object({
  enhancedPrompt: z.string().describe('The rewritten, more effective prompt.'),
});
export type EnhancePromptOutput = z.infer<typeof EnhancePromptOutputSchema>;

export async function enhancePrompt(input: EnhancePromptInput): Promise<EnhancePromptOutput> {
  return enhancePromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhancePrompt',
  input: { schema: EnhancePromptInputSchema },
  output: { schema: EnhancePromptOutputSchema },
  prompt: `You are a prompt engineering expert. Your task is to rewrite the user's prompt to be more specific, detailed, and effective for a large language model. Add context, constraints, and a clear desired output format if appropriate, but stick to the user's core intent.

  **User's Original Prompt:**
  "{{{prompt}}}"
  `,
});

const enhancePromptFlow = ai.defineFlow(
  {
    name: 'enhancePromptFlow',
    inputSchema: EnhancePromptInputSchema,
    outputSchema: EnhancePromptOutputSchema,
  },
  async (input) => {
    try {
        const model = input.model ? googleAI.model(input.model) : undefined;
        const { output } = await prompt(input, { model });
        if (!output) {
          throw new Error('Failed to enhance prompt.');
        }
        return output;
    } catch(err: any) {
        if (err.message && err.message.includes('429')) {
            throw new Error("You have exceeded your daily API quota. Please check your plan and billing details, or try again tomorrow.");
        }
        // Re-throw other errors
        throw err;
    }
  }
);
