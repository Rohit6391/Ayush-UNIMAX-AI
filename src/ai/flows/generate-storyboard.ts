'use server';

/**
 * @fileOverview An AI agent that creates a storyboard with multiple scene prompts from a single user prompt.
 *
 * - generateStoryboard - A function that generates a list of image prompts for a storyboard.
 * - GenerateStoryboardInput - The input type for this function.
 * - GenerateStoryboardOutput - The return type for this function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateStoryboardInputSchema = z.object({
  prompt: z.string().describe('A text prompt describing the story to be visualized.'),
});
export type GenerateStoryboardInput = z.infer<typeof GenerateStoryboardInputSchema>;

const SceneSchema = z.object({
    imagePrompt: z.string().describe("A detailed, descriptive prompt for an AI image generator to create a visually compelling scene for the storyboard. This should be a complete instruction, like 'A cinematic, wide shot of a knight on a black horse, standing on a cliff overlooking a stormy sea.'"),
});

const GenerateStoryboardOutputSchema = z.object({
  scenes: z.array(SceneSchema).describe('An array of storyboard scenes, each with a detailed image prompt.'),
});
export type GenerateStoryboardOutput = z.infer<typeof GenerateStoryboardOutputSchema>;

export async function generateStoryboard(
  input: GenerateStoryboardInput
): Promise<GenerateStoryboardOutput> {
  return generateStoryboardFlow(input);
}

const prompt = ai.definePrompt({
    name: 'generateStoryboardPrompt',
    input: { schema: GenerateStoryboardInputSchema },
    output: { schema: GenerateStoryboardOutputSchema },
    prompt: `You are a creative film director's assistant. Your task is to take a user's story idea and break it down into a sequence of exactly 4 distinct, visually interesting scenes. For each scene, you must write a detailed and descriptive prompt that an AI image generator can use to create a beautiful image.

User's Story Idea: "{{{prompt}}}"

Instructions:
1.  Create a sequence of exactly 4 scenes.
2.  Each scene must have a clear and descriptive 'imagePrompt'.
3.  The prompts should describe a single moment in time, focusing on visual details like camera angle, lighting, character pose, and environment.
4.  Do not include dialogue or character names in the prompts. Focus only on the visual description.

Example Output Structure:
{
  "scenes": [
    { "imagePrompt": "A close-up shot of a mysterious ancient compass lying on a dusty, sun-drenched map in a captain's cabin." },
    { "imagePrompt": "A wide, epic shot of a majestic wooden ship with black sails navigating through a treacherous, stormy sea with huge waves." },
    { "imagePrompt": "A shot from behind a character looking towards a mysterious, glowing tropical island on the horizon at sunset." },
    { "imagePrompt": "A low-angle shot of a hidden cave entrance on the island, with ancient carvings glowing with a faint blue light around it." }
  ]
}
`,
});


const generateStoryboardFlow = ai.defineFlow(
  {
    name: 'generateStoryboardFlow',
    inputSchema: GenerateStoryboardInputSchema,
    outputSchema: GenerateStoryboardOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

    