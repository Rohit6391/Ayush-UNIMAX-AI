
'use server';

/**
 * @fileOverview A shopping assistant AI agent.
 *
 * - shoppingAssistant - A function that finds a website to buy a product.
 * - ShoppingAssistantInput - The input type for the shoppingAssistant function.
 * - ShoppingAssistantOutput - The return type for the shoppingAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ShoppingAssistantInputSchema = z.object({
  productName: z.string().describe('The name of the product to search for.'),
});
export type ShoppingAssistantInput = z.infer<typeof ShoppingAssistantInputSchema>;

const ShoppingAssistantOutputSchema = z.object({
  websiteName: z.string().describe('The name of the website where the product can be purchased.'),
  websiteUrl: z.string().url().describe('The full URL to the product or a search page on the website.'),
});
export type ShoppingAssistantOutput = z.infer<typeof ShoppingAssistantOutputSchema>;

export async function shoppingAssistant(input: ShoppingAssistantInput): Promise<ShoppingAssistantOutput> {
  return shoppingAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'shoppingAssistantPrompt',
  input: {schema: ShoppingAssistantInputSchema},
  output: {schema: ShoppingAssistantOutputSchema},
  prompt: `You are an expert shopping assistant. Your goal is to find a single, popular, and reliable e-commerce website where the user can purchase the product they are looking for.

**Instructions:**
1.  Identify the product from the user's query: "{{productName}}".
2.  Find a well-known and trustworthy website that sells this product (e.g., Amazon, Best Buy, official brand site, etc.).
3.  Provide the name of the website and a direct URL to a relevant search or product page.
4.  Do not invent websites or URLs. Prioritize official brand websites or major, reputable retailers.
5.  Return ONLY the JSON object with the website name and URL.

**Product:** "{{productName}}"`,
});

const shoppingAssistantFlow = ai.defineFlow(
  {
    name: 'shoppingAssistantFlow',
    inputSchema: ShoppingAssistantInputSchema,
    outputSchema: ShoppingAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
        throw new Error("The AI failed to find a shopping website for the product.");
    }
    return output;
  }
);
