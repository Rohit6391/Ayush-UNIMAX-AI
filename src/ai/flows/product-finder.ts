
'use server';

/**
 * @fileOverview A product finder AI agent.
 *
 * - productFinder - A function that finds websites to buy a product.
 * - ProductFinderInput - The input type for the productFinder function.
 * - ProductFinderOutput - The return type for the productFinder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductFinderInputSchema = z.object({
  productName: z.string().describe('The name of the product to search for.'),
});
export type ProductFinderInput = z.infer<typeof ProductFinderInputSchema>;

const ProductSuggestionSchema = z.object({
    websiteName: z.string().describe('The name of the website where the product can be purchased.'),
    websiteUrl: z.string().url().describe('The full URL to the product or a search page on the website.'),
});

const ProductFinderOutputSchema = z.object({
  suggestions: z.array(ProductSuggestionSchema).describe('A list of up to 3 websites where the product can be purchased.'),
});
export type ProductFinderOutput = z.infer<typeof ProductFinderOutputSchema>;

export async function productFinder(input: ProductFinderInput): Promise<ProductFinderOutput> {
  return productFinderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productFinderPrompt',
  input: {schema: ProductFinderInputSchema},
  output: {schema: ProductFinderOutputSchema},
  prompt: `You are an expert shopping assistant. Your goal is to find up to three popular and reliable e-commerce websites where the user can purchase the product they are looking for.

**Instructions:**
1.  Identify the product from the user's query: "{{productName}}".
2.  Find up to 3 well-known and trustworthy websites that sell this product (e.g., Amazon, Best Buy, Walmart, Target, official brand site, etc.).
3.  For each website, provide its name and a direct URL to a relevant search or product page.
4.  Do not invent websites or URLs. Prioritize official brand websites or major, reputable retailers.
5.  Return ONLY the JSON object with the list of suggestions. If no reliable websites can be found, return an empty list.

**Product:** "{{productName}}"`,
});

const productFinderFlow = ai.defineFlow(
  {
    name: 'productFinderFlow',
    inputSchema: ProductFinderInputSchema,
    outputSchema: ProductFinderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
        throw new Error("The AI failed to find any shopping websites for the product.");
    }
    return output;
  }
);

    