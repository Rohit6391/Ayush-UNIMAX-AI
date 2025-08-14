
'use server';
import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CreditRiskAnalyzerInputSchema = z.object({
  data: z.string().describe('A string containing financial data for credit risk analysis (e.g., credit history, income, debt).'),
});
export type CreditRiskAnalyzerInput = z.infer<typeof CreditRiskAnalyzerInputSchema>;

const CreditRiskAnalyzerOutputSchema = z.object({
  analysis: z.string().describe('A detailed credit risk analysis, including a risk score (Low, Medium, High) and justification.'),
});
export type CreditRiskAnalyzerOutput = z.infer<typeof CreditRiskAnalyzerOutputSchema>;

const creditRiskAnalyzerFlow = ai.defineFlow(
  {
    name: 'creditRiskAnalyzerFlow',
    inputSchema: CreditRiskAnalyzerInputSchema,
    outputSchema: CreditRiskAnalyzerOutputSchema,
  },
  async (input) => {
    const prompt = `You are a credit risk analyst. Analyze the following financial data to assess credit risk. Provide a risk score (Low, Medium, or High) and a detailed justification for your assessment.

Data:
${input.data}`;

    const { output } = await ai.generate({
      prompt: prompt,
      model: 'googleai/gemini-1.5-flash-latest',
      output: {
        schema: CreditRiskAnalyzerOutputSchema,
      },
    });

    return output!;
  }
);

export async function analyzeCreditRisk(input: CreditRiskAnalyzerInput): Promise<CreditRiskAnalyzerOutput> {
    return creditRiskAnalyzerFlow(input);
}
