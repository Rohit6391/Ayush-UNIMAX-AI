
'use server';

/**
 * @fileOverview An AI agent that finds the best brand for a product.
 *
 * - brandFinder - A function that finds the best brand for a product.
 * - BrandFinderInput - The input type for the brandFinder function.
 * - BrandFinderOutput - The return type for the brandFinder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BrandFinderInputSchema = z.object({
  productName: z.string().describe('The name of the product to search for.'),
});
export type BrandFinderInput = z.infer<typeof BrandFinderInputSchema>;

const BrandSuggestionSchema = z.object({
    brandName: z.string().describe('The name of the suggested brand.'),
    reason: z.string().describe('A brief reason why this brand is recommended.'),
    bestProduct: z.string().describe('The name of a top product from this brand in the requested category.')
});

const BrandFinderOutputSchema = z.object({
  suggestions: z.array(BrandSuggestionSchema).describe('A list of up to 3 top brand suggestions for the product.'),
});
export type BrandFinderOutput = z.infer<typeof BrandFinderOutputSchema>;

export async function brandFinder(input: BrandFinderInput): Promise<BrandFinderOutput> {
  return brandFinderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'brandFinderPrompt',
  input: {schema: BrandFinderInputSchema},
  output: {schema: BrandFinderOutputSchema},
  prompt: `You are an expert product reviewer and market analyst. Your goal is to recommend the top 3 brands for a given product and suggest one of their best products in that category.

**Instructions:**
1.  Identify the product category from the user's query: "{{productName}}".
2.  Based on your knowledge of the market, quality, and user reviews, determine the top 3 brands for this product category.
3.  For each brand, provide its name, a short, one-sentence reason for your recommendation (e.g., "Best for budget," "Highest quality," "Most innovative features"), and the name of their best product that fits the user's query.
4.  Do not invent brands or products. Prioritize well-known, reputable brands.
5.  Return ONLY the JSON object with the list of suggestions. If you cannot determine top brands, return an empty list.

**Product Category:** "{{productName}}"`,
});

const brandFinderFlow = ai.defineFlow(
  {
    name: 'brandFinderFlow',
    inputSchema: BrandFinderInputSchema,
    outputSchema: BrandFinderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
        throw new Error("The AI failed to find any brand suggestions for the product.");
    }
    return output;
  }
);
