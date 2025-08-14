
'use server';
import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const TransactionPatternFinderInputSchema = z.object({
  data: z.string().describe('A string containing transaction data (e.g., CSV or JSON format).'),
});
export type TransactionPatternFinderInput = z.infer<typeof TransactionPatternFinderInputSchema>;

const TransactionPatternFinderOutputSchema = z.object({
  analysis: z.string().describe('A detailed analysis of patterns, trends, and anomalies found in the transaction data.'),
});
export type TransactionPatternFinderOutput = z.infer<typeof TransactionPatternFinderOutputSchema>;

const transactionPatternFinderFlow = ai.defineFlow(
  {
    name: 'transactionPatternFinderFlow',
    inputSchema: TransactionPatternFinderInputSchema,
    outputSchema: TransactionPatternFinderOutputSchema,
  },
  async (input) => {
    const prompt = `You are a financial analyst specializing in transaction analysis. Analyze the following transaction data and identify key patterns, trends, and anomalies. Provide a summary of your findings.

Data:
${input.data}`;

    const { output } = await ai.generate({
      prompt: prompt,
      model: 'googleai/gemini-1.5-flash-latest',
      output: {
        schema: TransactionPatternFinderOutputSchema,
      },
    });

    return output!;
  }
);

export async function findTransactionPatterns(input: TransactionPatternFinderInput): Promise<TransactionPatternFinderOutput> {
    return transactionPatternFinderFlow(input);
}
