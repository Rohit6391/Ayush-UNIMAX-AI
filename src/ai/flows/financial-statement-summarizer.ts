
'use server';
import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const FinancialStatementSummarizerInputSchema = z.object({
  statement: z.string().describe('The full text of a financial statement (e.g., balance sheet, income statement).'),
});
export type FinancialStatementSummarizerInput = z.infer<typeof FinancialStatementSummarizerInputSchema>;

const FinancialStatementSummarizerOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the key highlights and insights from the financial statement.'),
});
export type FinancialStatementSummarizerOutput = z.infer<typeof FinancialStatementSummarizerOutputSchema>;

const financialStatementSummarizerFlow = ai.defineFlow(
  {
    name: 'financialStatementSummarizerFlow',
    inputSchema: FinancialStatementSummarizerInputSchema,
    outputSchema: FinancialStatementSummarizerOutputSchema,
  },
  async (input) => {
    const prompt = `You are a certified public accountant. Summarize the following financial statement, highlighting the most critical data points, trends, and financial health indicators.

Financial Statement:
${input.statement}`;

    const { output } = await ai.generate({
      prompt: prompt,
      model: 'googleai/gemini-1.5-flash-latest',
      output: {
        schema: FinancialStatementSummarizerOutputSchema,
      },
    });

    return output!;
  }
);

export async function summarizeFinancialStatement(input: FinancialStatementSummarizerInput): Promise<FinancialStatementSummarizerOutput> {
    return financialStatementSummarizerFlow(input);
}
