
'use server';
import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const InvestmentPortfolioOptimizerInputSchema = z.object({
  portfolio: z.string().describe('A description of the current investment portfolio, including assets and risk tolerance.'),
});
export type InvestmentPortfolioOptimizerInput = z.infer<typeof InvestmentPortfolioOptimizerInputSchema>;

const InvestmentPortfolioOptimizerOutputSchema = z.object({
  recommendations: z.string().describe('Specific, actionable recommendations for optimizing the investment portfolio.'),
});
export type InvestmentPortfolioOptimizerOutput = z.infer<typeof InvestmentPortfolioOptimizerOutputSchema>;

const investmentPortfolioOptimizerFlow = ai.defineFlow(
  {
    name: 'investmentPortfolioOptimizerFlow',
    inputSchema: InvestmentPortfolioOptimizerInputSchema,
    outputSchema: InvestmentPortfolioOptimizerOutputSchema,
  },
  async (input) => {
    const prompt = `You are an expert investment advisor. Analyze the following investment portfolio and suggest optimizations based on the user's risk tolerance and goals.

Current Portfolio & Goals:
${input.portfolio}`;

    const { output } = await ai.generate({
      prompt: prompt,
      model: 'googleai/gemini-1.5-flash-latest',
      output: {
        schema: InvestmentPortfolioOptimizerOutputSchema,
      },
    });

    return output!;
  }
);

export async function optimizeInvestmentPortfolio(input: InvestmentPortfolioOptimizerInput): Promise<InvestmentPortfolioOptimizerOutput> {
    return investmentPortfolioOptimizerFlow(input);
}
